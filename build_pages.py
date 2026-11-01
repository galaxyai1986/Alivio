#!/usr/bin/env python3
from pathlib import Path

HEAD = """<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#c8102e" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <link rel="manifest" href="manifest.json" />
  <title>{title} | Alivio</title>
  <script>document.documentElement.setAttribute('data-theme', localStorage.getItem('alivio-theme')||'light');</script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css?v=11" />
</head>
<body data-page="{page}">
  <main>
"""

FOOT = """
  </main>
  <script src="js/chrome.js?v=11"></script>
  <script src="js/app.js?v=11"></script>
</body>
</html>
"""

def hero(h1, p):
    return f"""
    <section class="page-hero">
      <h1 class="hover-text rainbow-text">{h1}</h1>
      <p>{p}</p>
    </section>
"""

pages = {}

pages["experience.html"] = ("experience", "The Alivio Experience",
hero("The Alivio Experience", "A closed weekly table — not a mixer. You brief the room, members open doors, and someone stays on the intro until work is signed.")
+ """
    <section class="feature" style="margin-top:0">
      <img src="assets/feature-circle.jpg" alt="Operators around an Alivio table" />
      <div class="veil"></div>
      <div class="feature-copy">
        <div class="kicker">Live Handoffs</div>
        <h2 class="hover-text">Walk in with a problem. Leave with a name.</h2>
        <p>Chapters run a timed agenda so every minute produces a useful contact. Watch a warm intro happen in the room, then follow it that same week.</p>
        <p style="margin-top:22px"><a class="btn" href="invite.html" data-magnetic>GET INVITED</a></p>
      </div>
    </section>
    <section class="steps">
      <h2 class="hover-text">What a seat actually gives you</h2>
      <div class="cards">
        <article class="card"><h3 class="rainbow-text">A city room with a global bench</h3><p>Meet weekly where you live. When a client travels, Connect finds a trusted operator in 64 countries.</p></article>
        <article class="card"><h3 class="rainbow-text">Your craft, one chair</h3><p>No competitor in the same category. When the room hears your trigger, the intro comes to you.</p></article>
        <article class="card"><h3 class="rainbow-text">Fifty timed Tuesdays</h3><p>Briefs, a featured operator, education, and handoffs. The clock is the product.</p></article>
        <article class="card"><h3 class="rainbow-text">Alivio Connect</h3><p>Log 1-to-1s, pass intros, and keep the thread alive until the work closes.</p></article>
        <article class="card"><h3 class="rainbow-text">Alivio Academy</h3><p>How to brief a room, ask for a category, and lead a chapter without wasting the hour.</p></article>
        <article class="card"><h3 class="rainbow-text">Studio, hybrid, or online</h3><p>Same agenda. Pick the format that fits how you actually work.</p></article>
      </div>
    </section>
    <section class="faq">
      <h2>Experience FAQ</h2>
      <details open><summary>What happens in a meeting?</summary><p>Open conversation, 30-second briefs, one featured operator, education, then handoffs. Recognition at the end. No pitching from the floor.</p></details>
      <details><summary>How long until work shows up?</summary><p>Most seats see a useful intro inside 30–90 days if you show up, book 1-to-1s, and teach the room who to send you.</p></details>
      <details><summary>Can I visit more than once?</summary><p>Yes. Sit in as a guest. Apply only if the table feels like your people. The membership circle interviews, then votes.</p></details>
    </section>
""")

pages["community.html"] = ("community", "Our Global Community",
hero("Our Global Community", "4,200 rooms. 64 countries. Same timed agenda — local language, local operators.")
+ """
    <section class="content">
      <div class="cards">
        <article class="card"><h3 class="rainbow-text">Americas</h3><p>United States, Canada, Mexico, Brazil, Argentina, Colombia, Chile, Peru and growing coastal chapters.</p></article>
        <article class="card"><h3 class="rainbow-text">Europe</h3><p>United Kingdom, Germany, France, Spain, Italy, Nordics, and Central Europe — bilingual hybrid rooms included.</p></article>
        <article class="card"><h3 class="rainbow-text">Asia Pacific</h3><p>India, Australia, Singapore, Japan, Philippines, Indonesia, and New Zealand with dense metro chapters.</p></article>
        <article class="card"><h3 class="rainbow-text">Middle East & Africa</h3><p>UAE, Oman, Kenya, Ghana, South Africa, Nigeria, Uganda — sunrise meetings and evening online rooms.</p></article>
      </div>
      <div class="map-box" style="margin-top:36px">
        <p class="rainbow-text" style="font-size:28px;font-weight:800">64 countries · 4,200+ chapters</p>
        <span class="pin" style="left:28%;top:38%"></span>
        <span class="pin" style="left:48%;top:32%;background:#00f0ff;box-shadow:0 0 16px #00f0ff"></span>
        <span class="pin" style="left:62%;top:42%;background:#ffe600;box-shadow:0 0 16px #ffe600"></span>
        <span class="pin" style="left:72%;top:48%;background:#39ff14;box-shadow:0 0 16px #39ff14"></span>
        <span class="pin" style="left:40%;top:58%"></span>
      </div>
      <p style="text-align:center;margin-top:28px"><a class="btn" href="chapters.html" data-magnetic>EXPLORE CHAPTERS</a></p>
    </section>
""")

pages["stories.html"] = ("stories", "My Alivio Story",
hero("My Alivio Story", "Operators who stopped hunting. The intro arrived already warmed.")
+ """
    <section class="content">
      <div class="cards">
        <article class="card"><h3>Anita C. · India</h3><p>Alivio is not just about growing a company. It is growing with people who believe in long-term value and integrity.</p></article>
        <article class="card"><h3>Ashish S. · India</h3><p>We expanded across 8 metro cities with a team of 70+. Chapter introductions opened every new market.</p></article>
        <article class="card"><h3>Mahendra S. · India</h3><p>Over 45% of total revenue now originates directly from chapter referrals.</p></article>
        <article class="card"><h3>Jennie B. · USA</h3><p>86% of clients arrive pre-sold because another Alivio member already vouched for the work.</p></article>
        <article class="card"><h3>Ernest B. · Ghana</h3><p>Trusted logistics partners in other countries used to take months. Now they arrive within an hour of asking.</p></article>
        <article class="card"><h3>Paul T. · USA</h3><p>First-year ROI: hundreds of thousands in closed referral business from a single exclusive seat.</p></article>
      </div>
      <p style="text-align:center;margin-top:36px"><a class="btn" href="invite.html" data-magnetic>START YOUR STORY</a></p>
    </section>
""")

pages["franchise.html"] = ("franchise", "Alivio Franchising",
hero("Alivio Franchising", "Run the rooms in your region. Launch tables, coach directors, share in seat growth.")
+ """
    <section class="content prose">
      <p>Partners get the playbook, brand, Academy, and Connect. You open rooms. We protect the standard of the table.</p>
      <h2>What you receive</h2>
      <div class="cards">
        <article class="card"><h3>Territory rights</h3><p>Exclusive geography with clear chapter density targets and launch calendars.</p></article>
        <article class="card"><h3>Director training</h3><p>Leadership immersion, weekly coaching, and Alivio Academy certification.</p></article>
        <article class="card"><h3>Tech + brand</h3><p>Connect, Brandshare, event kits, and neon-ready creative for every market.</p></article>
      </div>
      <h2>Is this for you?</h2>
      <p>Operators who love people, process, and local business ecosystems. Prior community-building or franchise experience helps, not required.</p>
      <form class="form js-form" style="margin-top:24px">
        <input placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <input placeholder="City / Region of interest" required />
        <textarea rows="4" placeholder="Tell us about your background"></textarea>
        <button class="btn" data-magnetic type="submit">REQUEST FRANCHISE KIT</button>
        <p class="form-note"></p>
      </form>
    </section>
""")

pages["about.html"] = ("about", "About Alivio",
hero("About Alivio", "A weekly table built so operators stop cold-calling and start sending each other live work.")
+ """
    <section class="content prose">
      <p>Alivio started because noisy mixers waste an hour. We built a closed chapter: one specialist per craft, a timed agenda, and a rule that the introducer stays on the thread until the work is signed.</p>
      <h2>What we protect</h2>
      <p>Quality of the room. Exclusive seats. Follow-through. The product is not a directory — it is a table that actually sends work.</p>
      <h2>How we run</h2>
      <div class="cards">
        <article class="card"><h3 class="rainbow-text">Open the door first</h3><p>Pass a useful intro before you ask for one. That is how a chapter stays warm.</p></article>
        <article class="card"><h3 class="rainbow-text">Train every week</h3><p>Briefs get sharper. Asks get specific. The room learns how to find you.</p></article>
        <article class="card"><h3 class="rainbow-text">Keep the promise</h3><p>If you said you would open a door, you open it. Silence kills the intro.</p></article>
        <article class="card"><h3 class="rainbow-text">Name the people who show up</h3><p>We mark the operators who brief well and follow through. Culture follows that list.</p></article>
        <article class="card"><h3 class="rainbow-text">Protect the seat</h3><p>A weak chair in your category costs everyone. We hire slowly.</p></article>
        <article class="card"><h3 class="rainbow-text">Stay in the loop</h3><p>An intro is not a name on a napkin. The introducer checks in until work is closed or declined.</p></article>
      </div>
    </section>
""")

pages["leadership.html"] = ("about", "Leadership",
hero("Leadership", "Operators, coaches, and builders who protect the Alivio standard worldwide.")
+ """
    <section class="content">
      <div class="cards">
        <article class="person"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80" alt="CEO" /><h3>Maya Ellison</h3><p>Chief Executive Officer</p></article>
        <article class="person"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80" alt="COO" /><h3>Andre Silva</h3><p>Chief Operating Officer</p></article>
        <article class="person"><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80" alt="CMO" /><h3>Priya Raman</h3><p>Chief Marketing Officer</p></article>
        <article class="person"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80" alt="CTO" /><h3>Noah Park</h3><p>Chief Technology Officer</p></article>
        <article class="person"><img src="https://images.unsplash.com/photo-1573496356277-5c0d3c0c5c5c?auto=format&fit=crop&w=240&q=80" onerror="this.src='https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=240&q=80'" alt="CPO" /><h3>Elena Voss</h3><p>Chief People Officer</p></article>
        <article class="person"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=240&q=80" alt="CFO" /><h3>James Okonkwo</h3><p>Chief Financial Officer</p></article>
      </div>
    </section>
""")

pages["founder.html"] = ("about", "Our Founder",
hero("Our Founder", "Alivio began with a simple belief: business grows fastest when people give first.")
+ """
    <section class="content prose grid-2">
      <div>
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" alt="Founder" style="border-radius:22px;border:1px solid var(--line)" />
      </div>
      <div>
        <h2>Lena Alivio</h2>
        <p>After years of watching owners freeze in noisy mixers, Lena designed a weekly table with exclusive seats, a timed agenda, and a rule: the introducer stays on the thread.</p>
        <p>The first Alivio room opened in Austin. People left with a name and a follow-up, not a stack of cards. That is why it spread.</p>
        <p>Lena still teaches how to brief a room and hosts the annual Alivio Convention.</p>
      </div>
    </section>
""")

pages["foundation.html"] = ("about", "Alivio Foundation",
hero("Alivio Foundation", "Chapters send work to each other. The Foundation sends opportunity into the city around them.")
+ """
    <section class="content prose">
      <p>The Foundation funds education, first-time founder scholarships, and recovery grants in member cities — the same open-the-door habit, off the chapter floor.</p>
      <div class="cards">
        <article class="card"><h3 class="rainbow-text">$4.2M</h3><p>Grants awarded in the last 24 months to local education and entrepreneurship programs.</p></article>
        <article class="card"><h3 class="rainbow-text">118</h3><p>Community partners supported across 31 countries.</p></article>
        <article class="card"><h3 class="rainbow-text">Youth labs</h3><p>Referral ethics and leadership workshops for first-generation founders.</p></article>
      </div>
      <p style="margin-top:28px"><a class="btn" href="contact.html" data-magnetic>PARTNER WITH THE FOUNDATION</a></p>
    </section>
""")

pages["careers.html"] = ("about", "Careers",
hero("Careers at Alivio", "Build the platform where 120,000 entrepreneurs meet every week.")
+ """
    <section class="content">
      <div class="cards">
        <article class="card"><h3>Chapter Success Coach</h3><p>Remote · Full-time<br>Coach directors on retention, visitors, and referral quality.</p></article>
        <article class="card"><h3>Product Designer, Connect</h3><p>Austin · Hybrid<br>Design the member app used in 64 countries.</p></article>
        <article class="card"><h3>Events Producer</h3><p>Global · Contract<br>Stage national conferences and the Global Convention.</p></article>
      </div>
      <form class="form js-form" style="margin-top:28px">
        <input placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <input placeholder="Role of interest" />
        <textarea rows="4" placeholder="Why Alivio?"></textarea>
        <button class="btn" type="submit" data-magnetic>SEND APPLICATION</button>
        <p class="form-note"></p>
      </form>
    </section>
""")

pages["invite.html"] = ("invite", "Get Invited",
hero("Get Invited", "Sit in as a guest. Feel the table. Then decide if the seat is yours.")
+ """
    <section class="content grid-2">
      <form class="form js-form">
        <input placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <input placeholder="City" required />
        <input placeholder="Profession / category" required />
        <select><option>In-person</option><option>Hybrid</option><option>Online</option></select>
        <button class="btn" type="submit" data-magnetic>REQUEST AN INVITE</button>
        <p class="form-note"></p>
      </form>
      <div class="prose">
        <h2>What to expect</h2>
        <p>Nearby rooms land in your inbox within a business day. Arrive ten minutes early. Bring a 30-second brief of who you help. No pitching from the floor.</p>
        <p>Stay after. Ask two people who they need to meet. That is how Alivio actually starts.</p>
      </div>
    </section>
""")

pages["blog.html"] = ("blog", "Blog & Insights",
hero("Blog & Insights", "Referral science, chapter culture, and founder notes from the Alivio field.")
+ """
    <section class="content">
      <div class="cards">
        <article class="card"><h3>Brief the problem, not the pitch</h3><p>Rewrite your 30 seconds so the room can actually send you someone this week.</p></article>
        <article class="card"><h3>Four 1-to-1s beat twenty cards</h3><p>Book deep conversations. That is where the intro is born.</p></article>
        <article class="card"><h3>Is the room cold?</h3><p>A 14-day reset for visitor flow, follow-through, and closed work.</p></article>
        <article class="card"><h3>Show up fifty times</h3><p>Launch-week hustle dies. Tuesday presence is the pipeline.</p></article>
        <article class="card"><h3>From a name to a three-way call</h3><p>How a napkin intro becomes a meeting the buyer already trusts.</p></article>
        <article class="card"><h3>Open the door first</h3><p>Passing work is the strategy. Asking later is the dividend.</p></article>
      </div>
    </section>
""")

pages["tips.html"] = ("blog", "Networking Tips",
hero("Networking Tips", "Practical moves you can use in this week’s Alivio meeting.")
+ """
    <section class="content prose">
      <h2>1. Ask for a category, not “anyone”</h2>
      <p>“Operations directors at mid-size logistics firms” is an ask. “Anyone who needs marketing” is noise.</p>
      <h2>2. Follow up before the next sunrise</h2>
      <p>Intros die in silence. Send a thank-you, a calendar link, and one useful note.</p>
      <h2>3. Teach the room your trigger</h2>
      <p>Give the phrases they will hear at dinner. Make yourself easy to send.</p>
      <h2>4. Guard the chair</h2>
      <p>Filling seats fast costs everyone. A weak operator in your category poisons the pipeline.</p>
    </section>
""")

pages["events.html"] = ("blog", "Global Events",
hero("Global Events", "Conventions, national conferences, and regional sprints.")
+ """
    <section class="content">
      <div class="cards">
        <article class="card"><h3 class="rainbow-text">Alivio Global Convention 2026</h3><p>Austin · October 12–15<br>4,000 members. Keynotes, power teams, and the Referral Awards.</p></article>
        <article class="card"><h3>India Leadership Summit</h3><p>Mumbai · March 2026<br>Director training and mega-chapter case studies.</p></article>
        <article class="card"><h3>EU Hybrid Week</h3><p>Online + Berlin · June 2026<br>Cross-border referrals for product and professional services.</p></article>
      </div>
    </section>
""")

pages["chapters.html"] = ("invite", "Chapter Map",
hero("Chapter Map", "Find an Alivio room near you. One profession. One seat. Weekly.")
+ """
    <section class="content">
      <div class="map-box">
        <p style="text-align:center;max-width:420px;color:var(--muted)">Interactive density map of 4,200+ chapters. Neon pins mark open categories.</p>
        <span class="pin" style="left:22%;top:40%"></span>
        <span class="pin" style="left:35%;top:36%;background:#00f0ff;box-shadow:0 0 16px #00f0ff"></span>
        <span class="pin" style="left:51%;top:30%;background:#39ff14;box-shadow:0 0 16px #39ff14"></span>
        <span class="pin" style="left:58%;top:38%"></span>
        <span class="pin" style="left:70%;top:46%;background:#ffe600;box-shadow:0 0 16px #ffe600"></span>
        <span class="pin" style="left:78%;top:52%"></span>
      </div>
      <form class="form js-form" style="margin-top:24px">
        <input placeholder="City or postal code" required />
        <select><option>Any meeting type</option><option>In-person</option><option>Hybrid</option><option>Online</option></select>
        <button class="btn" type="submit" data-magnetic>FIND CHAPTERS</button>
        <p class="form-note"></p>
      </form>
    </section>
""")

pages["start-chapter.html"] = ("invite", "Start a Chapter",
hero("Start a Chapter", "If your city does not have the right room yet, build it.")
+ """
    <section class="content prose">
      <p>Core groups launch with 12–20 founding members, a director, and a 90-day visitor plan. Alivio provides the agenda, training, and Connect workspace on day one.</p>
      <form class="form js-form">
        <input placeholder="Your name" required />
        <input type="email" placeholder="Email" required />
        <input placeholder="Target city" required />
        <textarea rows="4" placeholder="Who is already interested?"></textarea>
        <button class="btn" type="submit" data-magnetic>START A CORE GROUP</button>
        <p class="form-note"></p>
      </form>
    </section>
""")

pages["partners.html"] = ("invite", "Partner Program",
hero("Alivio Partner Program", "A scalable referral channel for franchise brands and national sales teams.")
+ """
    <section class="content prose">
      <p>We place your local operators into the right chapters, train them, and report closed revenue. Brand partnership has no corporate fee. Individual chapter dues still apply.</p>
      <div class="cards">
        <article class="card"><h3>$48M</h3><p>Partner-attributed member revenue last year.</p></article>
        <article class="card"><h3>90+ brands</h3><p>Home services, financial, print, coaching, and field sales networks.</p></article>
        <article class="card"><h3>4x conversion</h3><p>Referral leads outperform typical inbound channels.</p></article>
      </div>
      <form class="form js-form" style="margin-top:24px">
        <input placeholder="Brand name" required />
        <input type="email" placeholder="Work email" required />
        <input placeholder="Number of locations" />
        <button class="btn" type="submit" data-magnetic>TALK TO PARTNERSHIPS</button>
        <p class="form-note"></p>
      </form>
    </section>
""")

pages["contact.html"] = ("contact", "Contact Us",
hero("Contact Alivio", "Support, partnerships, press, and chapter questions.")
+ """
    <section class="content grid-2">
      <form class="form js-form">
        <input placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <select><option>Member support</option><option>Visitor / join</option><option>Franchise</option><option>Press</option></select>
        <textarea rows="5" placeholder="How can we help?" required></textarea>
        <button class="btn" type="submit" data-magnetic>SEND MESSAGE</button>
        <p class="form-note"></p>
      </form>
      <div class="prose">
        <h2>Headquarters</h2>
        <p>120 Neon Plaza, Suite 400<br>Austin, TX 78701</p>
        <p>US: (800) 555-0148<br>Global: support@alivio.com</p>
        <p>Member services hours: Mon–Fri 8:00–18:00 CT</p>
      </div>
    </section>
""")

pages["connect.html"] = ("services", "Alivio Connect",
hero("Alivio Connect", "The member app for warm intros, 1-to-1s, and a global bench.")
+ """
    <section class="content prose">
      <p>Pass an intro in two taps. Log every 1-to-1. See who holds your category in another city. Connect ships with the seat.</p>
      <div class="cards">
        <article class="card"><h3>Private groups</h3><p>Chapter forums and power-team threads that stay on-brand.</p></article>
        <article class="card"><h3>Intro ledger</h3><p>Track given, received, and closed work in one dashboard.</p></article>
        <article class="card"><h3>Global search</h3><p>Find a trusted Alivio member in 64 countries when a client travels.</p></article>
      </div>
    </section>
""")

pages["academy.html"] = ("services", "Alivio Academy",
hero("Alivio Academy", "Lifelong learning for members and directors.")
+ """
    <section class="content">
      <div class="cards">
        <article class="card"><h3>Member Success Path</h3><p>Onboarding, infomercial lab, referral requests, and leadership electives.</p></article>
        <article class="card"><h3>Director certification</h3><p>Chapter health, visitor experience, and conflict resolution.</p></article>
        <article class="card"><h3>Keynote vault</h3><p>Convention recordings and weekly skill sprints.</p></article>
      </div>
    </section>
""")

pages["brandshare.html"] = ("services", "Alivio Brandshare",
hero("Alivio Brandshare", "Approved logos, slide decks, social kits, and motion templates.")
+ """
    <section class="content prose">
      <p>Keep the rainbow neon standard consistent. Download lockups, chapter badges, and campaign kits. Do not recolor the wordmark.</p>
    </section>
""")

pages["store.html"] = ("services", "Alivio Store",
hero("Alivio Store", "Apparel, badges, and chapter kits that glow in the room.")
+ """
    <section class="content">
      <div class="cards">
        <article class="card"><h3>Member badge</h3><p>Magnetic name plate with rainbow edge lighting for in-person meetings.</p></article>
        <article class="card"><h3>Chapter kit</h3><p>Timer, banners, referral slips, and visitor welcome cards.</p></article>
        <article class="card"><h3>Apparel</h3><p>Midnight tees and jackets with the Alivio spectrum mark.</p></article>
      </div>
    </section>
""")

legal = """
    <section class="content prose">
      <p>This is a demonstration website for Alivio, a fictional referral networking brand created for design preview. It is not affiliated with any other networking organization.</p>
      {extra}
    </section>
"""
pages["cookie.html"] = ("legal", "Cookie Policy", hero("Cookie Policy", "How Alivio uses cookies on this preview site.") + legal.format(extra="<p>Essential cookies run the interface. Analytics cookies, if enabled, help us improve page performance. You can disable non-essential cookies in your browser.</p>"))
pages["privacy.html"] = ("legal", "Privacy Policy", hero("Privacy Policy", "How we handle the information you share with Alivio.") + legal.format(extra="<p>Forms on this preview store submissions locally in your browser session only. Do not submit real secrets. A production Alivio deployment would use encrypted storage and a published retention schedule.</p>"))
pages["terms.html"] = ("legal", "Terms and Conditions", hero("Terms and Conditions", "Use of the Alivio preview website.") + legal.format(extra="<p>Content is for demonstration. Membership, fees, and chapter availability described here are illustrative. Live membership is governed by a signed Alivio member agreement.</p>"))

out = Path("/workspace")
for name, (page, title, body) in pages.items():
    (out / name).write_text(HEAD.format(title=title, page=page) + body + FOOT, encoding="utf-8")
    print("wrote", name)

print("done", len(pages))
