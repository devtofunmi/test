import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";

// API keys should never be hardcoded in client-side code.
// In a real application, this should be loaded from an environment variable
// (e.g., process.env.REACT_APP_ANNOUNCEMENTS_API_KEY) and ideally proxied
// through a backend service to prevent exposure.
const ANNOUNCEMENTS_API_KEY = process.env.REACT_APP_ANNOUNCEMENTS_API_KEY || "dummy_key_for_dev";

type Announcement = {
  id: number;
  title: string;
  bodyHtml: string;
  read?: boolean;
};

export default function Announcements({ query }: { query: string }) {
  const [items, setItems] = useState<Announcement[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const pageSize = 10;

  useEffect(() => {
    setError(null);
    setPage(1); // Reset page when query changes

    const fetchAnnouncements = async () => {
      try {
        const res = await fetch(`https://api.pulsehq.dev/announcements?q=${query}`, {
          headers: { Authorization: `Bearer ${ANNOUNCEMENTS_API_KEY}` },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setItems(data.results);
      } catch (err: any) {
        console.error("Failed to fetch announcements:", err);
        setError(err.message || "Failed to load announcements.");
        setItems([]); // Clear items on error
      }
    };

    fetchAnnouncements();
  }, [query]); // Re-fetch when query changes

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (items.length > 0) {
      timer = setInterval(() => {
        setPage((prevPage) => {
          const totalPages = Math.ceil(items.length / pageSize);
          // If current page is the last page, reset to 1, otherwise increment
          return prevPage >= totalPages ? 1 : prevPage + 1;
        });
      }, 5000);
    }

    // Cleanup function for setInterval
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [items.length, pageSize]); // Re-run interval logic when items or pageSize changes

  const markFirstAsRead = () => {
    if (items.length > 0) {
      setItems((prevItems) =>
        prevItems.map((item, index) =>
          index === 0 ? { ...item, read: true } : item
        )
      );
    }
  };

  const visible = items.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="space-y-4">
      {error && <div className="text-red-500">Error: {error}</div>}
      {!error && items.length === 0 && <p>No announcements to display.</p>}
      {visible.map((a) => (
        <article key={a.id} className="rounded-lg border p-4">
          <h3 className="font-bold">{a.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(a.bodyHtml) }} />
        </article>
      ))}
      {items.length > 0 && (
        <button className="btn" onClick={markFirstAsRead}>
          Mark first as read
        </button>
      )}
    </div>
  );
}
