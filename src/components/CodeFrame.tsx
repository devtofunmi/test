import React from "react";

export const CodeFrame = () => {
  return (
    <div className="w-full h-screen bg-white" dangerouslySetInnerHTML={{ __html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>PulseHQ — Run your business in real time</title>
  <style>
    :root{
      --bg:#0b1020;
      --panel:#0f1733;
      --panel2:#0c132b;
      --text:#eaf0ff;
      --muted:#b9c3e6;
      --muted2:#93a1d3;
      --brand:#7c5cff;
      --brand2:#22d3ee;
      --good:#34d399;
      --border:rgba(255,255,255,.10);
      --shadow:0 12px 40px rgba(0,0,0,.35);
      --radius:18px;
      --max:1120px;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
      color:var(--text);
      background:
        radial-gradient(900px 500px at 15% 10%, rgba(124,92,255,.35), transparent 60%),
        radial-gradient(900px 500px at 85% 20%, rgba(34,211,238,.25), transparent 55%),
        radial-gradient(1000px 600px at 50% 100%, rgba(52,211,153,.14), transparent 55%),
        var(--bg);
      overflow-x:hidden;
    }
    a{color:inherit; text-decoration:none}
    .wrap{max-width:var(--max); margin:0 auto; padding:0 22px}

    /* Nav */
    .nav{
      position:sticky; top:0; z-index:50;
      backdrop-filter:saturate(140%) blur(10px);
      background:linear-gradient(to bottom, rgba(11,16,32,.85), rgba(11,16,32,.55));
      border-bottom:1px solid var(--border);
    }
    .nav-inner{display:flex; align-items:center; justify-content:space-between; padding:16px 0; gap:14px}
    .brand{display:flex; align-items:center; gap:10px; font-weight:700; letter-spacing:.2px}
    .logo{
      width:34px; height:34px; border-radius:10px;
      background: conic-gradient(from 220deg, var(--brand), var(--brand2), var(--good), var(--brand));
      box-shadow: 0 10px 30px rgba(124,92,255,.28);
    }
    .nav-links{display:flex; gap:18px; color:var(--muted); font-weight:600; font-size:14px}
    .nav-links a{padding:8px 10px; border-radius:10px}
    .nav-links a:hover{background:rgba(255,255,255,.06); color:var(--text)}
    .nav-cta{display:flex; gap:10px; align-items:center}

    /* Buttons */
    .btn{
      display:inline-flex; align-items:center; justify-content:center; gap:10px;
      border:1px solid var(--border);
      background:rgba(255,255,255,.04);
      color:var(--text);
      padding:10px 14px;
      border-radius:12px;
      font-weight:700;
      font-size:14px;
      cursor:pointer;
      transition:transform .12s ease, background .12s ease, border-color .12s ease;
      user-select:none;
    }
    .btn:hover{transform:translateY(-1px); background:rgba(255,255,255,.06)}
    .btn.primary{
      border-color: rgba(124,92,255,.6);
      background: linear-gradient(135deg, rgba(124,92,255,.95), rgba(34,211,238,.75));
      box-shadow: 0 18px 44px rgba(124,92,255,.25);
    }
    .btn.primary:hover{filter:saturate(1.05)}
    .btn.small{padding:8px 12px; font-size:13px; border-radius:11px}

    /* Hero */
    .hero{padding:64px 0 28px}
    .grid{
      display:grid; gap:26px;
      grid-template-columns: 1.15fr .85fr;
      align-items:center;
    }
    .kicker{
      display:inline-flex; align-items:center; gap:10px;
      color:var(--muted);
      background:rgba(255,255,255,.05);
      border:1px solid var(--border);
      padding:8px 12px;
      border-radius:999px;
      font-weight:700;
      font-size:13px;
    }
    .dot{width:8px;height:8px;border-radius:999px;background:var(--good); box-shadow:0 0 0 4px rgba(52,211,153,.15)}
    h1{
      margin:16px 0 10px;
      font-size:52px;
      line-height:1.04;
      letter-spacing:-1px;
    }
    .sub{
      margin:0 0 18px;
      color:var(--muted);
      font-size:18px;
      line-height:1.55;
      max-width:54ch;
    }
    .hero-cta{display:flex; gap:12px; align-items:center; flex-wrap:wrap}
    .note{color:var(--muted2); font-size:13px; margin-top:10px}

    /* Mock */
    .mock{
      border-radius: var(--radius);
      border:1px solid var(--border);
      background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
      box-shadow: var(--shadow);
      overflow:hidden;
    }
    .mock-top{
      padding:12px 14px;
      background: rgba(0,0,0,.18);
      border-bottom:1px solid var(--border);
      display:flex; align-items:center; justify-content:space-between;
    }
    .traffic{display:flex; gap:8px}
    .pill{width:10px; height:10px; border-radius:50%}
    .pill.red{background:#ff5f57}
    .pill.yellow{background:#febc2e}
    .pill.green{background:#28c840}
    .mock-body{padding:16px}
    .stat-row{display:grid; grid-template-columns:repeat(3,1fr); gap:12px}
    .stat{
      padding:12px;
      border-radius:14px;
      border:1px solid var(--border);
      background: rgba(11,16,32,.35);
    }
    .stat .label{color:var(--muted2); font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.8px}
    .stat .value{margin-top:6px; font-size:22px; font-weight:800}
    .chart{
      margin-top:12px;
      height:160px;
      border-radius:14px;
      border:1px solid var(--border);
      background: radial-gradient(600px 220px at 30% 40%, rgba(124,92,255,.25), transparent 55%),
                  radial-gradient(600px 220px at 70% 60%, rgba(34,211,238,.22), transparent 55%),
                  rgba(11,16,32,.35);
      position:relative;
      overflow:hidden;
    }
    .spark{
      position:absolute; inset:0;
      background:
        linear-gradient(90deg, transparent 0%, rgba(255,255,255,.08) 30%, transparent 60%),
        linear-gradient(to top, rgba(52,211,153,.18), transparent 60%);
      mix-blend-mode:screen;
      opacity:.8;
      transform:skewX(-14deg) translateX(-18%);
      animation: shimmer 7s linear infinite;
    }
    @keyframes shimmer{0%{transform:skewX(-14deg) translateX(-45%)} 100%{transform:skewX(-14deg) translateX(45%)}}

    /* Social proof */
    .social{padding:26px 0 8px}
    .social .row{
      display:flex; flex-wrap:wrap; gap:12px;
      align-items:center; justify-content:space-between;
      border:1px solid var(--border);
      background:rgba(255,255,255,.03);
      border-radius: var(--radius);
      padding:14px 16px;
    }
    .social .left{color:var(--muted); font-weight:700; font-size:13px}
    .logos{display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end}
    .logo-chip{
      padding:8px 10px;
      border-radius:999px;
      border:1px solid var(--border);
      background: rgba(255,255,255,.04);
      color: #dfe7ff;
      font-weight:800;
      font-size:12px;
      letter-spacing:.5px;
      opacity:.95;
    }

    /* Sections */
    section{padding:56px 0}
    .section-head{display:flex; align-items:flex-end; justify-content:space-between; gap:16px; flex-wrap:wrap}
    .section-head h2{margin:0; font-size:34px; letter-spacing:-.6px}
    .section-head p{margin:0; color:var(--muted); max-width:60ch; line-height:1.6}

    .cards{margin-top:18px; display:grid; gap:14px; grid-template-columns:repeat(3,1fr)}
    .card{
      border-radius: var(--radius);
      border:1px solid var(--border);
      background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
      padding:16px;
      box-shadow: 0 10px 26px rgba(0,0,0,.22);
    }
    .icon{
      width:42px; height:42px; border-radius:14px;
      display:grid; place-items:center;
      background: rgba(124,92,255,.18);
      border:1px solid rgba(124,92,255,.35);
      margin-bottom:10px;
    }
    .card h3{margin:0 0 6px; font-size:17px}
    .card p{margin:0; color:var(--muted); line-height:1.6; font-size:14px}

    /* Pricing */
    .pricing{margin-top:18px; display:grid; gap:14px; grid-template-columns:repeat(3,1fr)}
    .plan{
      border-radius: var(--radius);
      border:1px solid var(--border);
      background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
      padding:18px;
      box-shadow: 0 10px 26px rgba(0,0,0,.22);
      position:relative;
      overflow:hidden;
    }
    .plan.featured{
      border-color: rgba(124,92,255,.6);
      box-shadow: 0 18px 44px rgba(124,92,255,.20);
    }
    .badge{
      position:absolute; top:14px; right:14px;
      padding:6px 10px;
      border-radius:999px;
      font-size:12px;
      font-weight:800;
      background: rgba(124,92,255,.18);
      border:1px solid rgba(124,92,255,.35);
      color:#e8e2ff;
    }
    .plan h3{margin:0 0 6px; font-size:18px}
    .plan .desc{margin:0 0 14px; color:var(--muted); font-size:14px; line-height:1.55}
    .price{display:flex; align-items:flex-end; gap:8px; margin-bottom:12px}
    .price .amt{font-size:40px; font-weight:900; letter-spacing:-1px}
    .price .per{color:var(--muted2); font-weight:700; font-size:14px; padding-bottom:8px}
    ul{margin:0; padding:0; list-style:none; display:grid; gap:10px}
    li{display:flex; gap:10px; align-items:flex-start; color:var(--muted); font-weight:650; font-size:14px; line-height:1.4}
    .check{
      width:18px; height:18px; border-radius:6px;
      background: rgba(52,211,153,.18);
      border:1px solid rgba(52,211,153,.40);
      flex:0 0 auto;
      position:relative;
      margin-top:2px;
    }
    .check:after{
      content:"";
      position:absolute; left:5px; top:2px;
      width:5px; height:9px;
      border:2px solid rgba(234,240,255,.92);
      border-top:0; border-left:0;
      transform:rotate(45deg);
    }
    .plan .actions{margin-top:16px; display:flex; gap:10px}
    .plan .actions .btn{width:100%}

    /* CTA */
    .cta{
      border-radius: calc(var(--radius) + 6px);
      border:1px solid var(--border);
      background:
        radial-gradient(800px 240px at 20% 20%, rgba(124,92,255,.30), transparent 60%),
        radial-gradient(800px 240px at 80% 30%, rgba(34,211,238,.22), transparent 60%),
        linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
      box-shadow: var(--shadow);
      padding:22px;
      display:flex; align-items:center; justify-content:space-between; gap:18px; flex-wrap:wrap;
    }
    .cta h3{margin:0; font-size:22px; letter-spacing:-.4px}
    .cta p{margin:6px 0 0; color:var(--muted); line-height:1.55; max-width:62ch}

    footer{padding:32px 0 42px; color:var(--muted2)}
    .foot{display:flex; justify-content:space-between; gap:16px; flex-wrap:wrap; border-top:1px solid var(--border); padding-top:16px}
    .mini-links{display:flex; gap:14px; flex-wrap:wrap}
    .mini-links a{color:var(--muted2)}
    .mini-links a:hover{color:var(--text)}

    /* Responsive */
    @media (max-width: 980px){
      .grid{grid-template-columns:1fr;}
      h1{font-size:44px}
      .cards{grid-template-columns:1fr;}
      .pricing{grid-template-columns:1fr;}
      .nav-links{display:none}
    }
  </style>
</head>
<body>
  <div class="nav">
    <div class="wrap nav-inner">
      <a class="brand" href="#top">
        <span class="logo" aria-hidden="true"></span>
        <span>PulseHQ</span>
      </a>
      <div class="nav-links" aria-label="Primary">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#security">Security</a>
        <a href="#faq">FAQ</a>
      </div>
      <div class="nav-cta">
        <a class="btn small" href="#">Sign in</a>
        <a class="btn small primary" href="#pricing">Start free</a>
      </div>
    </div>
  </div>

  <main id="top">
    <div class="wrap hero">
      <div class="grid">
        <div>
          <div class="kicker"><span class="dot" aria-hidden="true"></span> Live dashboards • Automations • Team workflows</div>
          <h1>Run your business in real time.</h1>
          <p class="sub">PulseHQ gives founders a single place to track revenue, support, product usage, and key alerts. Set it up in minutes. Scale it for years.</p>
          <div class="hero-cta">
            <a class="btn primary" href="#pricing">Start 14‑day free trial</a>
            <a class="btn" href="#features">View features</a>
          </div>
          <div class="note">No credit card required • Cancel anytime • SOC 2-ready controls</div>
        </div>
        <div class="mock" aria-label="Product preview">
          <div class="mock-top">
            <div class="traffic" aria-hidden="true">
              <span class="pill red"></span><span class="pill yellow"></span><span class="pill green"></span>
            </div>
            <div style="color:var(--muted); font-weight:800; font-size:13px">PulseHQ / Overview</div>
          </div>
          <div class="mock-body">
            <div class="stat-row">
              <div class="stat"><div class="label">MRR</div><div class="value">$48.2k</div></div>
              <div class="stat"><div class="label">Churn</div><div class="value">1.4%</div></div>
              <div class="stat"><div class="label">NPS</div><div class="value">62</div></div>
            </div>
            <div class="chart"><div class="spark"></div></div>
            <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap">
              <span class="logo-chip">ALERTS</span>
              <span class="logo-chip">WORKFLOWS</span>
              <span class="logo-chip">REPORTS</span>
              <span class="logo-chip">ROLE ACCESS</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrap social" aria-label="Social proof">
      <div class="row">
        <div class="left">Trusted by teams shipping faster at</div>
        <div class="logos" aria-hidden="true">
          <span class="logo-chip">NORTHWIND</span>
          <span class="logo-chip">VECTORLABS</span>
          <span class="logo-chip">CLOUDMINT</span>
          <span class="logo-chip">RIVER & CO</span>
          <span class="logo-chip">APERTURE</span>
        </div>
      </div>
    </div>

    <section id="features">
      <div class="wrap">
        <div class="section-head">
          <div>
            <h2>Everything you need to stay ahead.</h2>
            <p>Connect Stripe, HubSpot, Intercom, and your data warehouse. PulseHQ turns messy signals into clear decisions.</p>
          </div>
          <a class="btn" href="#pricing">See plans</a>
        </div>

        <div class="cards" role="list">
          <div class="card" role="listitem">
            <div class="icon">⚡</div>
            <h3>Instant setup</h3>
            <p>Choose a template, connect your tools, and your dashboards populate automatically—no SQL required.</p>
          </div>
          <div class="card" role="listitem">
            <div class="icon">🧠</div>
            <h3>Smart alerts</h3>
            <p>Get notified when MRR dips, churn spikes, or key accounts go quiet. Alerts go to Slack, email, or webhooks.</p>
          </div>
          <div class="card" role="listitem">
            <div class="icon">🔁</div>
            <h3>Automations</h3>
            <p>Trigger playbooks based on behavior—assign tasks, open tickets, tag users, and keep momentum.</p>
          </div>
          <div class="card" role="listitem">
            <div class="icon">👥</div>
            <h3>Team-ready permissions</h3>
            <p>Role-based access, audit logs, SSO, and workspace-level controls so your data stays organized and secure.</p>
          </div>
          <div class="card" role="listitem">
            <div class="icon">📈</div>
            <h3>Revenue analytics</h3>
            <p>MRR, cohorts, expansion, and retention in one place—with shareable reports for stakeholders.</p>
          </div>
          <div class="card" role="listitem">
            <div class="icon">🧩</div>
            <h3>Extensible</h3>
            <p>Use the API + webhooks to sync data in and out. Build custom metrics and embed dashboards.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="security">
      <div class="wrap">
        <div class="section-head">
          <div>
            <h2>Security that grows with you.</h2>
            <p>Designed for modern SaaS teams that need speed without compromising on governance.</p>
          </div>
        </div>
        <div class="cards" role="list" style="grid-template-columns:repeat(3,1fr)">
          <div class="card" role="listitem">
            <div class="icon">🔒</div>
            <h3>Encryption</h3>
            <p>Data encrypted in transit (TLS) and at rest. Secrets stored using industry-standard practices.</p>
          </div>
          <div class="card" role="listitem">
            <div class="icon">🧾</div>
            <h3>Audit logs</h3>
            <p>Track logins, exports, permission changes, and automated actions for full accountability.</p>
          </div>
          <div class="card" role="listitem">
            <div class="icon">🛡️</div>
            <h3>Access controls</h3>
            <p>SSO/SAML, SCIM provisioning, and granular roles to keep the right eyes on the right data.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing">
      <div class="wrap">
        <div class="section-head">
          <div>
            <h2>Simple pricing for every stage.</h2>
            <p>Start small, scale predictably. Upgrade anytime.</p>
          </div>
          <a class="btn" href="#faq">Questions?</a>
        </div>

        <div class="pricing" aria-label="Pricing plans">
          <div class="plan">
            <h3>Starter</h3>
            <p class="desc">For early founders validating metrics.</p>
            <div class="price"><div class="amt">$29</div><div class="per">/ month</div></div>
            <ul>
              <li><span class="check"></span> 3 dashboards</li>
              <li><span class="check"></span> Slack + email alerts</li>
              <li><span class="check"></span> 2 teammates</li>
            </ul>
            <div class="actions"><a class="btn" href="#">Get Starter</a></div>
          </div>

          <div class="plan featured">
            <div class="badge">Most popular</div>
            <h3>Growth</h3>
            <p class="desc">For teams optimizing retention and ops.</p>
            <div class="price"><div class="amt">$79</div><div class="per">/ month</div></div>
            <ul>
              <li><span class="check"></span> Unlimited dashboards</li>
              <li><span class="check"></span> Advanced automations</li>
              <li><span class="check"></span> Role permissions</li>
              <li><span class="check"></span> 10 teammates</li>
            </ul>
            <div class="actions"><a class="btn primary" href="#">Start free trial</a></div>
          </div>

          <div class="plan">
            <h3>Enterprise</h3>
            <p class="desc">For security, compliance, and scale.</p>
            <div class="price"><div class="amt">Let’s talk</div></div>
            <ul>
              <li><span class="check"></span> SSO/SAML + SCIM</li>
              <li><span class="check"></span> Audit logs & policies</li>
              <li><span class="check"></span> Dedicated support</li>
            </ul>
            <div class="actions"><a class="btn" href="#">Contact sales</a></div>
          </div>
        </div>

        <div style="margin-top:18px" class="cta">
          <div>
            <h3>See PulseHQ on your data, today.</h3>
            <p>Connect your tools and get your first dashboard in under 10 minutes. Invite your team when you’re ready.</p>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap">
            <a class="btn primary" href="#">Start free trial</a>
            <a class="btn" href="#features">Explore features</a>
          </div>
        </div>
      </div>
    </section>

    <section id="faq">
      <div class="wrap">
        <div class="section-head">
          <div>
            <h2>FAQ</h2>
            <p>Common questions about setup, billing, and security.</p>
          </div>
        </div>

        <div class="cards" style="grid-template-columns:1fr 1fr">
          <div class="card">
            <h3>Do I need a credit card?</h3>
            <p>No. Start the 14‑day trial with just an email. Add billing only when you’re ready to upgrade.</p>
          </div>
          <div class="card">
            <h3>What tools do you integrate with?</h3>
            <p>Stripe, HubSpot, Intercom, Segment, Slack, Google Sheets, and webhooks. API available for custom sources.</p>
          </div>
          <div class="card">
            <h3>Can I share dashboards?</h3>
            <p>Yes—share within your workspace or generate secure links with expiration and access rules.</p>
          </div>
          <div class="card">
            <h3>Is it secure?</h3>
            <p>We support encryption, RBAC, audit logs, and SSO on Enterprise. We can also help with your SOC 2 program.</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="wrap">
        <div class="foot">
          <div style="display:flex; align-items:center; gap:10px">
            <span class="logo" aria-hidden="true"></span>
            <div>
              <div style="font-weight:900; color:var(--text)">PulseHQ</div>
              <div style="font-size:13px; margin-top:2px">© <span id="y"></span> PulseHQ, Inc. All rights reserved.</div>
            </div>
          </div>
          <div class="mini-links" aria-label="Footer">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Docs</a>
            <a href="#">Status</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  </main>

  <script>
    document.getElementById('y').textContent = new Date().getFullYear();
  </script>
</body>
</html>
` }} />
  );
};

export default CodeFrame;