# Community Canvas Site Analysis

Exhaustive content extraction from 4 HTML pages downloaded from community-canvas.org (Squarespace).

---

## Global Site Configuration

### Squarespace Template
- Template ID: `55f0aac0e4b0f0a5b7e0b22e` (Hayden family, version 7)
- Site ID: `58e7ad2bebbd1a4ffd84fb76`
- Collection type: Index page (homepage is an index page with 5 sections)

### Fonts
- **Typekit/Adobe Fonts**: `https://use.typekit.net` (Kit loaded via JS blob URL - kit ID embedded in obfuscated JS)
- **Google Fonts**: `Roboto` (weights: 500 italic, 500, 700 italic, 700) - `https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700`
- **Font Awesome 5**: `https://use.fontawesome.com/releases/v5.0.13/css/all.css`

### Stylesheets
1. `https://fonts.gstatic.com` (preconnect)
2. Google Fonts Roboto
3. Squarespace spacer component CSS
4. Squarespace code component CSS (home and thankyou/translations pages)
5. Site CSS: `https://static1.squarespace.com/static/sitecss/58e7ad2bebbd1a4ffd84fb76/91/55f0aac0e4b0f0a5b7e0b22e/58eff992e3df28353c4f3dd8/358/site.css?nocustom=true`
6. Custom CSS: `https://static1.squarespace.com/static/custom-css/58e7ad2bebbd1a4ffd84fb76/58eff992e3df28353c4f3dd8/0/custom.css`
7. Font Awesome 5

### Inline CSS
Only one inline style block across all pages:
```css
@keyframes fonts-loading { 0%, 99% { color: transparent; } }
html.wf-loading * { animation: fonts-loading 3s; }
```

### Color Scheme (from tweakJSON and visual inspection)
- Gallery arrow background: `rgba(34,34,34,1)` (dark gray/black)
- Gallery arrow color: `rgba(255,255,255,1)` (white)
- Gallery circle color: `rgba(255,255,255,1)` (white)
- Gallery info background: `rgba(0, 0, 0, .7)` (semi-transparent black)
- **Note**: Actual site colors (background, text, accent) are defined in site.css and custom.css, not in the HTML. From visual inspection of the live site:
  - Background: white (`#ffffff`)
  - Primary text: dark gray/black
  - Accent/link color: appears to be a warm orange/coral
  - Section backgrounds alternate between white and light gray

### Navigation Structure (All Pages)
**Header Nav** (4 items, duplicated for desktop/mobile):
1. Get Started -> `http://community-canvas.org/#get-started`
2. Translations -> `http://community-canvas.org/#translations`
3. About -> `http://community-canvas.org/#about`
4. Thank You -> `http://community-canvas.org/#thanks`

**Logo**: `CommunityCanvas-LogoMark-Stacked.png` linked to `/`

**Search**: Form with action `/search`, method `get`

### Footer (All Pages)
Text: "The Community Canvas is a framework that helps people and organizations build stronger communities. It provides a template for anyone who brings people together."

### Meta/OG Tags (All Pages)
- `og:site_name`: The Community Canvas
- `fb:app_id`: 729922717182498
- OG image: `http://static1.squarespace.com/static/58e7ad2bebbd1a4ffd84fb76/t/5913106df5e2318b7c4c0f8a/1494421614` (801x687)

---

## PAGE 1: HOMEPAGE (cc-home.html)

**Title**: The Community Canvas
**URL**: `https://community-canvas.org`
**OG Description**: The Community Canvas is a framework that helps people and organizations build stronger communities.

The homepage is a Squarespace **Index page** with 5 sections displayed as a single scrolling page. There is a **right-side Index navigation** with expandable horizontal lines.

### Index Navigation (Right Sidebar)
1. Community Canvas -> `#community-canvas`
2. Onwards -> `#onwards`
3. Get Started -> `#get-started-2`
4. About -> `#about-2`
5. Thank You -> `#thank-you`

### Scroll Indicator
A hidden scroll indicator at the bottom of section 1 with text "Scroll" and a down-caret arrow icon.

---

### SECTION 1: "community-canvas" (Hero)
**Section class**: `Index-page Index-page--has-image`
**Block types**: text (2), spacer (1337), content
**Background image**: `170510-CommunityCanvas-Cover-Clean.jpg` (full Squarespace CDN URL: `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494452713197-SR8VE6TJ1SWS5AW2E8A1/170510-CommunityCanvas-Cover-Clean.jpg`)

#### Content:

**H1**: A framework to help you build meaningful communities.

**Paragraph**: We have spent the last 15 years building and participating in communities and found tremendous joy in them. Based on our own experience and with the generous help of leading community builders, we have developed a framework that helps build stronger communities and make our society a bit more connected: the Community Canvas.

---

### SECTION 2: "onwards"
**Section class**: `Index-page`
**Block types**: content, html, image, code, spacer

#### Content:

**H2**: Moving Forward & Onward

**Paragraph**: Since publishing the Canvas in 2017 we have learned so much about community and want to continue supporting community builders. However during that journey we also realized that we felt called to pursue different directions and have launched separate projects going forward. Find out more about where these new projects are headed at [Together Institute](https://www.together-institute.org/community) and [Close Knit.](http://closeknit.co)

**Paragraph**: While this project has come to a close, this website, the framework and the guidebooks below will continue to stay accessible and we hope it will provide joy and meaning to you and your groups.

*(spacer)*

**H1**: The Community Canvas

*(Image: `Illustration-1.2+Identity.png` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494421565994-PB50C8WWGUSI8SHJTW8B/Illustration-1.2+Identity.png`)*

*(Image: `image-asset.png` (1494353912260) - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494353912260-6A22HM48HFHZKB146KP9/image-asset.png`)*

*(Image: `image-asset.png` (1494260552943) - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494260552943-71IZAORQM056NZ5VQX48/image-asset.png`)*

**H3**: Key questions

**Paragraph**: For each of the 17 themes, we have identified a set of questions that will help find the right answers for your own community. We provide worksheets to make the questions actionable.

*(Image: `Illustration-2.1+Selection+.png` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494421124447-5X3KJXP0OFHUIO9N8XWI/Illustration-2.1+Selection+.png`)*

**H3**: Reflections

**Paragraph**: While the Canvas doesn't give answers, we provide further background for each of the 17 themes, based on our observations and feedback from leading community builders. In future versions we're going to include case studies for each theme.

*(Image: `Illustration-2.5+Content.png` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494421227448-7XR7MTWELOJBOLA75U2W/Illustration-2.5+Content.png`)*

---

### SECTION 3: "get-started-2"
**Section class**: `Index-page`
**Block types**: content, html, image, code, horizontalrule

#### Content:

**H1**: Get Started

**Paragraph**: All Community Canvas documents are released under Creative Commons license BY-NC-SA 4.0. More about that [here](/improve).

---

#### Document: Summary

**H2**: [Summary](https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-Summary.pdf?loc=heading)

**Paragraph**: The Canvas and its 3 Sections in a nutshell.

[Download PDF](https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-Summary.pdf), 7 pages

*(Image: `Community+Canvas+Summary` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494943467747-QFFWFSM89V3E7NIENAYM/Community+Canvas+Summary`)*
*(Image link: `https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-Summary.pdf?loc=image`)*

---

#### Document: Guidebook

**H2**: [Guidebook](https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-Guidebook.pdf?loc=heading)

**Paragraph**: The 3 Sections and each of the 17 Themes covered in detail with key questions, further background and observations. [Download PDF](https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-Guidebook.pdf), 61 pages

*(Image: `Community+Canvas+Guidebook` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494943215465-6Y4ZFYF9LD1HT7KCFU1V/Community+Canvas+Guidebook`)*
*(Image link: `https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-Guidebook.pdf?loc=image`)*

---

#### Document: Minimum Viable Community

**H2**: [Minimum Viable Community](https://docs.google.com/presentation/d/1WpQ0N0l4LBXFi4A_hwT0E2LUQSoxAhq3iRlTqyzGQio/?doc=MVC&loc=heading)

**Paragraph**: We created a Minimum Viable Community template, choosing the most crucial 9 questions to start with.

[Open Google Doc](https://docs.google.com/presentation/d/1WpQ0N0l4LBXFi4A_hwT0E2LUQSoxAhq3iRlTqyzGQio/?doc=MVC) | [Download PDF](https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-MinimumViableCommunity.pdf)

*(Image: `image-asset.png` (1505155144706) - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1505155144706-IK8EDQ0NJ0F3F60WEBAQ/image-asset.png`)*
*(Image link: `https://docs.google.com/presentation/d/1WpQ0N0l4LBXFi4A_hwT0E2LUQSoxAhq3iRlTqyzGQio/?doc=MVC&loc=image`)*

---

#### Worksheets

**H2**: Worksheets

**Paragraph**: Answer the questions of the Canvas for your own community.

**Paragraph**: The Visual Summary has all themes and one key question on one page. PDF.

**Paragraph**: The comprehensive Google Doc lists each of the 17 themes with all questions, ideal for choosing what is relevant to your needs and creating your own community strategy.

**H3**: [Worksheet Summary](https://docs.google.com/presentation/d/1kx8C2lsfHld6pqABzkEfLFBzvJidqfeMlrzdYaC732I/?doc=WorksheetSummary&loc=heading)

[Open Google Doc](https://docs.google.com/presentation/d/1kx8C2lsfHld6pqABzkEfLFBzvJidqfeMlrzdYaC732I/?doc=WorksheetSummary) | [Download PDF](https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-Worksheet-Summary.pdf), 1 page

*(Image: `170510-CommunityCanvas-Cover-Worksheet-Thumb+Summary.jpg` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494945820913-QE0EMA3Z67VAP5WZ3AVO/170510-CommunityCanvas-Cover-Worksheet-Thumb+Summary.jpg%3Floc%3Dimage`)*
*(Image link: `https://docs.google.com/presentation/d/1kx8C2lsfHld6pqABzkEfLFBzvJidqfeMlrzdYaC732I/?doc=WorksheetSummary&loc=image`)*

**H3**: [Worksheet Doc](https://docs.google.com/document/d/1fyuwwqX911i9CK1BjY8jXkk3v2m8ZCHeV3dVqYuDiGM/?doc=WorksheetDoc&loc=heading)

[Open Google Doc](https://docs.google.com/document/d/1fyuwwqX911i9CK1BjY8jXkk3v2m8ZCHeV3dVqYuDiGM/?doc=WorksheetDoc) | [Download PDF](https://github.com/communitycanvas/documents/raw/master/CommunityCanvas-Worksheet-Doc.pdf), 28 Pages

*(Image: `170510-CommunityCanvas-Cover-Worksheet-Thumb+-Doc.jpg` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494945828970-TI1YBS6U3E0JM2N2DGAR/170510-CommunityCanvas-Cover-Worksheet-Thumb+-Doc.jpg%3Floc%3Dimage`)*
*(Image link: `https://docs.google.com/document/d/1fyuwwqX911i9CK1BjY8jXkk3v2m8ZCHeV3dVqYuDiGM/?doc=WorksheetDoc&loc=image`)*

---

#### Translations (Link Section)

**H2**: Translations

**Paragraph**: We've been working with a wonderful team of volunteer translators to localize the Community Canvas.

**Paragraph**: A big thank you to all of them: Alberto Puliafito, Amir Noureddini, Andre de Menezes Lara Resende, Bruno Evangelista, Chi-Hsun Tsai, Eder Delgado, Evgeny Reznitsky, Flavia Vivacqua, Gabriel Holmes, Hermano Reis, Jakub Pacanda, Joao Bernardo Casali, Julie Petignat, Luciana C M Costa, Maria Polyak, Nikita Savostikov, Piritta Syrjala, Rei Dishon, Rogerio Melfi, Tanja Laub, Tomas Burian,

*(Image: `Illustration-Extra-Translation.png` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1527716352822-OP0AFQ416YH68BZDQSRF/Illustration-Extra-Translation.png`)*

**Language Links** (H3 headings, each linking to translations page):
- [All](https://community-canvas.org/translations)
- [Arabic](https://community-canvas.org/translations#arabic)
- [Catalan](https://community-canvas.org/translations#catalan)
- [Chinese](https://community-canvas.org/translations#chinese)
- [Czech](https://community-canvas.org/translations#czech)
- [Farsi](https://community-canvas.org/translations#farsi)
- [Finnish](https://community-canvas.org/translations/#finnish)
- [French](https://community-canvas.org/translations#french)
- [German](https://community-canvas.org/translations#german)
- [Hebrew](https://community-canvas.org/translations#hebrew)
- [Italian](https://community-canvas.org/translations#italian)
- [Portuguese](https://community-canvas.org/translations#portuguese-brazil) (with flag emoji)
- [Russian](https://community-canvas.org/translations#russian)
- [Spanish](https://community-canvas.org/translations#spanish)
- [Ukrainian](https://community-canvas.org/translations#ukrainian)

---

### SECTION 4: "about-2"
**Section class**: `Index-page`
**Block types**: content, html, image, code, spacer

#### Content:

**H1**: About the Creators

**Paragraph**: Since publishing the Canvas in 2017 we've grown and learned so much and feel called to pursue different directions. Find out more about Fabian's project [Together Institute](http://together.is) and Sascha's [Close Knit](http://closeknit.co) that will continue the work with and for community builders.

*(Image: `Illustration-2.7+Roles.png` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494425835865-QCQOAHMG297BP4W3XSMK/Illustration-2.7+Roles.png`)*

---

#### Fabian Pfortmuller

*(Image: `image-asset.jpeg` (1494354005673) - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494354005673-EL7WRNXNO760FWQC4025/image-asset.jpeg`)*

**H3**: Fabian Pfortmuller

**Paragraph**: Fabian Pfortmuller is a Swiss community builder. He is co-founder of the [Together Institute](https://www.together-institute.org/community), an organization dedicated to building caring, engaged & healthy relationships in communities, networks, neighborhoods, organizations and society at large. Fabian is also an Innovator in Residence for the [Kauffman Foundation](https://www.kauffman.org/). He co-founded [Sandbox](https://sandbox.is/), a global community for young change makers and [Holstee](https://www.holstee.com/), an organization providing tools for a meaningful life. Fabian regularly writes about community building topics at [www.together.is](https://www.together.is)

**Contact**: [fabian@together-institute.org](mailto:fabian@together-institute.org) | [@pforti](http://twitter.com/pforti) | [pforti.com](http://pforti.com/)

Note: The email "fabian@together-institute.org" is split across two link elements: "fa" links to the Together Institute community page, "bian@together-institute.org" is the mailto link. This appears to be an anti-spam technique.

---

#### Nico Luchsinger

*(Image: `image-asset.jpeg` (1494354251971) - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494354251971-O3JQ5S4AF4Z5G3MJ0ZA3/image-asset.jpeg`)*

**H3**: Nico Luchsinger

**Paragraph**: Nico Luchsinger is a Zurich-based entrepreneur and journalist. He co-founded [Sandbox](https://sandbox.is/) with Fabian, and led the organization until 2013. Currently, he is the Co-Executive Director at [Asia Society Switzerland](https://asiasociety.org/switzerland), a think-tank focused on exploring Asia's role in the world.

**Contact**: [nico.luchsinger@gmail.com](mailto:nico.luchsinger@gmail.com) | [@halbluchs](http://twitter.com/halbluchs) | [medium.com/@halbluchs](http://medium.com/@halbluchs)

---

#### Sascha Mombartz

*(Image: `Portrait-Small.jpg` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1597162399073-SBEL4P9Z9GH9E7L2D139/Portrait-Small.jpg`)*

**H3**: Sascha Mombartz

**Paragraph**: Sascha Mombartz is an artist, designer and community builder based in New York. Sascha works at the intersection of systems thinking, communication and user experience design to unravel complex relationships and create meaningful interactions and frameworks that help organizations and individuals build belonging, trust and resilience. He previously worked at the New York Times, Google's Creative Lab and has consulted with startups and nonprofits for the last 10 years. His work and thoughts on community can be found on [Close Knit](http://closeknit.co).

**Contact**: [s@mombartz.com](mailto:s@mombartz.com) | [closeknit.co](http://closeknit.co)

---

### SECTION 5: "thank-you"
**Section class**: `Index-page`
**Block types**: content, html, code, spacer, horizontalrule

#### Content:

**H1**: Thank you!

**Paragraph**: The Community Canvas project would never have been possible without the generous support of many community builders across the globe.

**H2**: A sincere thank you to

**Paragraph (bold)**: Everyone who worked on the Community Canvas 2.0 team: Chris Chavez, Daniel Brooks, Erin Dixon, Michel Bachmann, Sita Magnusson.

**Paragraph**: Christine Lai, Casper ter Kuile, Angie Thurston, David Spinks, Alex Simon, Daniel Ospina, Mathias Jakobsen, Scott Shigeoka, Anton Chernikov, Ryan Fix, Michel Bachmann, Nettra Pan, James McBennett, Konstantina Zoehrer, Omri Baumer, Kasper Hulthin and all participants of the Community Canvas workshops for helping us develop version 1.

**Paragraph (bold)**: Everyone who helped translate the Canvas: Tomas Burian, Jakub Pacanda, Amir Noureddini, Piritta Syrjala, Julie Petignat, Tanja Laub, Rei Dishon, Alberto Puliafito, Flavia Vivacqua, Bruno Evangelista, Luciana C M Costa, Gabriel Holmes, Rogerio Melfi, Hermano Reis, Joao Bernardo Casali, Maria Polyak, Nikita Savostikov, Evgeniy Reznitskiy, Eder Delgado.

**Paragraph (bold)**: The team at Kauffman Foundation for their support and guidance, especially Lauren Higgins, Mark Beam, Andy Stoll and Victor Hwang.

**Paragraph (bold)**: Everyone who was a Steward for Community Canvas 2.0 and provided feedback and guidance: Aaron Kahlow, Adam Yukelson, Adrienne Haynes, Aida Murad, Al Jeffrey, Alberto Pulifato, Alden Bevington, Alex Budak, Alex Simon, Alexa Clay, Allie Mahler, Alnoor Ladha, Andrea Fernandez, Andy Stoll, Ankit Shah, Annalyn Lavey, Anne Merkle, Anton Chernikov, Ants Cabraal, Anurag Gupta, Asia Lindsay, Audrey Low, Avary Kent, Axel Magnuson, Ben Bechar, Ben Sahlmuller, Betsy Ribble Pine, Bill Issacs, Brian Kurtz, Brooke Brosolino, Carlos Saba, Caroline Mehl, Casey Rosengren, Casper ter Kuile, Cesar Salazar, Charles Michel, Charles Vogl, Charlotte Terrien, Chelsea Robinson, Christian Vanizette, Christian Busch, Christine Lai, Claire Wathen, Cynthia Boedihardjo, Damian Madray, Darin Petersen, Dave Lim, David Spinks, Deborah Chang, Dedo Baranshamaje, Dee Hamill, Deepti Doshi, Dharmishta Rood, Donald MacLean, Dorian Baroni, Eder Delgado, Elan Babchuck, Eli Malinsky, Elizabeth McWhorter, Enoch Elwell, Erica Dorn, Erik Martinez Resly, Erin Frey, Ernesto van Peborgh, Ethan Lipsitz, Evan Absher, Farah Assir, Francesca Pick, Gail Taylor, Gameli Adzaho, Hinnerk Hansen, Ines Silva, Ishan Shapiro, Ismail Chaib, Jaime Arredondo, James Hanusa, Jameson Dempsey, Jeff Shiau, Jen Silverstein, Jen Bailey, Jen Sandler, Jenn Sander, Jerone Hsu, Jerri Chou, Jerry Michalski, Jess Rimington, Jesse Israel, Jessica von Farkas, Joe Grant, Jonah Brotman, Jonathan Olinger, Jonathan Imme, Josh Stearns, Kalsoom Lakhani, Kanan Dhru, Kate Beecroft, Katie Baker, Kevin Huynh, Kiran Reddy, Konstantina Zoehrer, Kristoffer Tjalve, Krystle Starvis, Lana Jelenjev, Lauren Higgins, Leen Sadder, Lennon Flowers, Lucian Tarnovski, Lynn Zebeda, Maggie de Pree, Marga Biller, Mari Camardelli, Mariana Santos, Marion Cortina, Mark Beam, Marsha Dunn, Mary Galeti, Matilda Sundaker, Megha Desai, Melinda Varfi, Melissa Wong, Michael Mayernick, Michael Cox, Michele Steckler, Michelle Lim, Mike Fleisch, Mikey Muhanna, Misraim Macias, Nan Braun, Natalie Self, Nettra Pan, Nick McGirl, Nico Luchsinger, Nicole Okumu, Niels Rot, Nora Bateson, Olivier Taieb, Omri Baumer, Oscar Cerezales, Patricia Shaw, Peter Powell, Rabbi Sara Luria, Rachel Happe, Rachel Gerrol, Ragnar Behncke, Rhea Mehta, Rodrigo Cunha, Romain Vakilitabar, Ronan Harrington, Roy Munin, Ruhi Sharmim, Ryan Fix, Sanderson Jones, Sandra Ortiz Diaz, Sarah Judd Welch, Scott Shigeoka, Sebastian Lindstroem, Sherman Whites, Shira Abramowitz, Steve Tam, Sue Borchardt, Sunnie Tolle, Sylvia Vriesendorp, Tamas Hovanyecz, Teju Ravilochan, Tibet Sprague, Tim Weiss, Ting Kelly, Tony Bacigalupo, Travis King, Vanessa Wai, Victoria Stoyanova, Virginia Alonso Navarro, Zach Anderson, Zach Bell, Zaina Kanaan.

---

## PAGE 2: THANK YOU (cc-thankyou.html)

**Title**: Thank You -- The Community Canvas
**URL**: `https://community-canvas.org/thank-you`

This is a standalone page (not an index page). It contains the same thank-you content as Section 5 of the homepage.

### Content (Single Section)

**H1**: Thank you!

**Paragraph**: The Community Canvas project would never have been possible without the generous support of many community builders across the globe.

**H2**: A sincere thank you to

*(Same 5 paragraphs as Section 5 of homepage - see above for full text)*

### Images
- Logo: `CommunityCanvas-LogoMark-Stacked.png` (header)
- Footer illustration: `image-asset.png` (1494355703592) - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494355703592-YQCLGTCKYSGDTGL6APAH/image-asset.png`

---

## PAGE 3: TRANSLATIONS (cc-translations.html)

**Title**: Translations -- The Community Canvas
**URL**: `https://community-canvas.org/translations`

This is a standalone page with one main section (id: `page-5b0efca188251b8f82f9f9d9`). It has two major parts: the language translations, and the translator bios.

### Introduction

**H1**: Translations

**Paragraph**: We worked together with a wonderful team of volunteers to translate the canvas. Here you can find all translations. Want to translate it into your language? [Find out more here](https://docs.google.com/document/d/1ni-dXsq3jMI7Wn-o6KFjBZ93Z-acQkS5MXrCboDDSTw/edit#heading=h.pldrrsj8lh7t). The translated Community Canvas is published under the same creative commons license as the English Canvas, [more info on that here](https://community-canvas.org/improve).

### Language Sections

Each language section has an anchor ID and contains available documents with links to PDFs and Google Docs.

---

#### Arabic (#arabic)
By [Rami Sedhom](mailto:rami.sedhom@gmail.com)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/1ni-dXsq3jMI7Wn-o6KFjBZ93Z-acQkS5MXrCboDDSTw/edit#heading=h.pldrrsj8lh7t)
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/1m9EMvVKbmGiPGYjL4Ef5Yvr9CihhkNMp99eNdwzu8OY/edit?usp=sharing)

#### Catalan (#catalan)
By [Joan Giralt Duran](mailto:joangi@gmail.com)
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/catalan/Community%20Canvas%20Summary%20-%20Catalan.pdf)
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/1s-ZxfwO_RG6HDSHbQFqs56NcO3J1TPe_L_9x5JYpe0o/edit?usp=sharing)
*(Image: catalan.jpg)*

#### Chinese Traditional (#chinese)
By [Chi-Hsun Tsai](#Chi-HsunTsai)
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/chinese/Community%20Canvas%20Summary%20-%20%20Chinese%20Traditional.pdf)
- Worksheet Summary: [gDoc](https://docs.google.com/presentation/d/1at4MzesMJztifRggmJNDuzfLL_WwUex8720To9RDr9Q/edit#slide=id.g4b9e868261_0_0) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/chinese/Community%20Canvas%20Worksheet%20Summary%20-%20%20Chinese%20Traditional.pdf)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/1QMlVQcacHx3jxWa0FvhsbpiQM2vq268xS8QMnLCT6Zw/edit) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/chinese/Community%20Canvas%20Worksheet%20Doc%20-%20%20Chinese%20Traditional.pdf)
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/14LO--nwP8T2NR4ZSu54at4bP_IBRngugmWm6gzEDD0w/edit#slide=id.g4c39d90c4d_0_0) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/chinese/Community%20Canvas%20Minimum%20Viable%20Community%20-%20%20Chinese%20Traditional.pdf)
*(Image: Screenshot+2020-07-19+at+14.38.46.png)*

#### Czech (#czech)
By [Tomas Burian](#TomasBurian), [Jakub Pacanda](#JakubPacanda)
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/czech/Community%20Canvas%20Czech%20Summary.pdf)
- [Guidebook](https://github.com/communitycanvas/documents/raw/master/translations/czech/Community%20Canvas%20Czech%20Guidebook.pdf)
- Worksheet Summary: [gDoc](https://docs.google.com/presentation/d/1Qqh2_WQGBj1dxQWnCf9Xb-y4QQIthrLtL5R5DzdmrOc/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/czech/Community%20Canvas%20Czech%20Worksheet%20Summary.pdf)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/1uSNLWWUWga6HYpmCM7cMFZAsyFoEEkstIB6vihVaosw/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/czech/Community%20Canvas%20Czech%20Worksheet%20Doc.pdf)
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/1QSy_iO7IfrZ1dQESFV6i2GFXj1dRg7VS5heaUnhgjYw/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/czech/Community%20Canvas%20Czech%20Minimum%20Viable%20Community.pdf)
*(Image: CommunityCanavas-Czech.jpg)*

#### Farsi (#farsi)
By [Amir Noureddini](#AmirNoureddini)
- Minimum Viable Community: [PDF](https://github.com/communitycanvas/documents/raw/master/translations/farsi/Community%20Canvas%20Minimum%20Viable%20Community%20-%20Farsi.pdf)
*(Image: Community+Canvas+Minimum+Viable+Community+-+Farsi.jpg)*

#### Finnish (#finnish)
By [Piritta Syrjala](#PirittaSyrjala)
- Worksheet Summary: [gDoc](https://docs.google.com/presentation/d/1GIg6WvUErv4hMgNFfEJtzlr6rb5vq7wQzi8UxLWJ2-4/) | [PDF](https://drive.google.com/open?id=1HiBFvWAR7kZ_oePUAUQUhtoPS68IDXx8)
- Minimum Viable Community: [gDoc](https://drive.google.com/open?id=1VbfbB5obkf7gr-HVOZoaukPR7sDmJQpBhg5pcPqvXKg) | [PDF](https://drive.google.com/open?id=1Ad4cUH2mxLl0LgqgF6JRqx58in31k0Yf)
*(Image: image-asset.png (1572376423637))*

#### French (#french)
By [Julie Petignat](#JuliePetignat)
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/french/Community%20Canvas%20Summary%20-%20French.pdf)
*(Image: French-Community+Canvas+Summary.jpg)*

#### German (#german)
By [Tanja Laub](#TanjaLaub)
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/german/Community%20Canvas%20Summary%20-%20German.pdf)
- [Guidebook](https://github.com/communitycanvas/documents/raw/master/translations/german/Community%20Canvas%20Guidebook%20-%20German.pdf)
- Worksheet Summary: [gDoc](https://docs.google.com/presentation/d/1GDtgEeqiV9x7XvydIN8WzQ543KYCZMY7ngz1ZcLfnXU/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/german/Community%20Canvas%20Worksheet%20Summary%20-%20German.pdf)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/1Qn8jVQR4W_kkkxhvDyUjLLIH_Pwg_QfbBHps9tn2h3w/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/german/Community%20Canvas%20Worksheet%20Doc%20-%20German.pdf)
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/1fQfizpmDO0SyImOfId51glzmvrSPP5m2DSUEHkEiC4A/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/german/Community%20Canvas%20Minimum%20Viable%20Community%20-%20German.pdf)
- Visual Overview: [Themes](https://github.com/communitycanvas/documents/raw/master/translations/german/Community%20Canvas%20Visual%20Overview%20Themes%20Color%20-%20German.pdf)
*(Image: Community+Canvas+Summary+German.jpg)*

#### Hebrew (#hebrew)
By Rei Dishon
- Visual Overview: [Themes](https://github.com/communitycanvas/documents/raw/master/translations/hebrew/Community%20Canvas%20Visual%20Overview%20Themes%20Color%20-%20Hebrew.pdf)
*(Image: Community+Canvas+Visual+Overview+Themes+Color+-+Hebrew.jpg)*

#### Italian (#italian)
By [Alberto Puliafito](#AlbertoPuliafito)
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/italian/Community%20Canvas%20Summary%20-%20Italian.pdf)
- [Guidebook](https://github.com/communitycanvas/documents/raw/master/translations/italian/Community%20Canvas%20Guidebook%20-%20Italian.pdf)
- Worksheet Summary: [gDoc](https://docs.google.com/presentation/d/1F6LSl0wazUa9TTpcjyUkfdjBl4_3u2o54QdD9TbmljQ) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/italian/Community%20Canvas%20Worksheet%20Summary%20-%20Italian.pdf)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/1mqqchZ9F9BgTjMgSwtaB8Dc1e9WSW_qhzjsut-oQKoU/edit#heading=h.jh32b81h841n) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/russian/Community%20Canvas%20Russian%20Worksheet%20Doc.pdf) *(Note: PDF link appears to point to Russian version -- possible error in original)*
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/1FoLuyVO1t8hUO76qDVA1vtfu2NxaUdClpc8e7SA46U8/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/italian/Community%20Canvas%20Minimum%20Viable%20Community%20-%20Italian.pdf)
*(Image: Italian-CommunityCanvasGuidebook-Cover.jpg)*

#### Portuguese Brazil (#portuguese-brazil)
By Flavia Vivacqua, Bruno Evangelista, Luciana C M Costa, Gabriel Holmes, Rogerio Melfi, Hermano Reis, Joao Bernardo Casali, Andre de Menezes Lara Resende
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/portuguese/Community%20Canvas%20Summary%20-%20Portuguese.pdf)
- [Guidebook](https://github.com/communitycanvas/documents/raw/master/translations/portuguese/Community%20Canvas%20Guidebook%20-%20Portuguese.pdf)
- Worksheet Summary: [gDoc](https://docs.google.com/presentation/d/1Aj_jQybyxaJwbKxT3W9UNl74CcWHMh-59Hdd8GR9y2s/edit#slide=id.p) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/portuguese/Community%20Canvas%20Worksheet%20Summary%20-%20Portuguese.pdf)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/18tqqtUaIIBoJQDNLUrXjoPfF8vjZxL1pFPRGl9vKMEU/edit) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/portuguese/Community%20Canvas%20Worksheet%20Doc%20%20-%20Portuguese.pdf)
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/12uLPb-ljlKh5lC3_2E23V9apDeNjScMB-4nEffTNmMk/edit#slide=id.g26353718b7_0_0) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/portuguese/Community%20Canvas%20Minimum%20Viable%20Community%20-%20Portuguese.pdf)
*(Image: image-asset.png (1595183221483), Screenshot+2020-07-19+at+14.35.22.png)*

#### Russian (#russian)
By Maria Polyak, Nikita Savostikov, [Evgeny Reznitsky](#EvgenyReznitsky)
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/russian/Community%20Canvas%20Summary%20-%20Russian.pdf)
- [Guidebook](https://github.com/communitycanvas/documents/raw/master/translations/russian/Community%20Canvas%20Guidebook%20-%20Russian.pdf)
- Worksheet Summary: [gDoc](https://docs.google.com/presentation/d/1MUJa1RDbGER4ralFNklQmWVR9NGJCZGyzd6Z5dAeIcI/edit?usp=sharing) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/russian/Community%20Canvas%20Worksheet%20Summary%20-%20Russian.pdf)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/1dH5UrAWmIY6BvnykoBc6Vn7OVKK71IukyKJZJdBVj_U/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/russian/Community%20Canvas%20Worksheet%20Doc%20-%20Russian.pdf)
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/1gniHT5byxqVyIFLgDA2KvCjDkqK_hODiEAuTuWlUY88) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/russian/Community%20Canvas%20Minimum%20Viable%20Community%20-%20Russian.pdf)
- Visual Overview: [Sections](https://github.com/communitycanvas/documents/raw/master/translations/russian/Community%20Canvas%20Visual%20Overview%20Sections%20Color%20-%20Russian.pdf) | [Themes](https://github.com/communitycanvas/documents/raw/master/translations/russian/Community%20Canvas%20Visual%20Overview%20Themes%20Color%20-%20Russian.pdf)
*(Image: Evgenii Reznitskii.jpg)*

#### Spanish (#spanish)
By [Eder Delgado](#EderDelgado)
- [Summary](https://github.com/communitycanvas/documents/raw/master/translations/spanish/Community%20Canvas%20Summary%20-%20Spanish.pdf)
- [Guidebook](https://github.com/communitycanvas/documents/raw/master/translations/spanish/Community%20Canvas%20Guidebook%20-%20Spanish.pdf)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/1wom_HHJazCm1vxmnloMcVFx6Db315YRO5vo3GwC7rrs/) | [PDF](https://github.com/communitycanvas/documents/raw/master/translations/spanish/Community%20Canvas%20Worksheet%20Doc%20-%20Spanish.pdf)
*(Image: Spanish-EderDelgado.jpg)*

#### Ukrainian (#ukrainian)
By [Nadiia Konevska](mailto:nadia86ko@gmail.com) ([LinkedIn](http://www.linkedin.com/in/nadiia-konevska)), [Nadiia Hrankina](mailto:n.hrankina@gmail.com) ([LinkedIn](https://www.linkedin.com/in/nadiiahrankina/)), [Vladyslav Hazda](mailto:vladgazda@gmail.com) ([LinkedIn](https://www.linkedin.com/in/vladyslav-hazda/))
- [Summary](https://github.com/communitycanvas/documents/raw/0e52c634786d84cfe57fd4b588fb652194c16479/translations/ukrainian/Community%20Canvas%20Summary%20-%20Ukrainian.pdf)
- [Guidebook](https://github.com/communitycanvas/documents/raw/0e52c634786d84cfe57fd4b588fb652194c16479/translations/ukrainian/Community%20Canvas%20Guidebook%20-%20Ukrainian.pdf)
- Worksheet Summary: [gDoc](https://docs.google.com/presentation/d/1zBBNjdcCX6w9DVup_rjosreRhNj-etOe9ArinyvFRFw/edit?usp=drive_link) | [PDF](https://github.com/communitycanvas/documents/raw/0e52c634786d84cfe57fd4b588fb652194c16479/translations/ukrainian/Community%20Canvas%20Worksheet%20Summary%20-%20Ukrainian.pdf)
- Worksheet Doc: [gDoc](https://docs.google.com/document/d/1D6mH8OS19ySv0OnSi13xNFeFAnzLCG7dG5YjnqKsa3o/edit?usp=drive_link) | [PDF](https://github.com/communitycanvas/documents/raw/0e52c634786d84cfe57fd4b588fb652194c16479/translations/ukrainian/Community%20Canvas%20Worksheet%20Doc%20-%20Ukrainian.pdf)
- Minimum Viable Community: [gDoc](https://docs.google.com/presentation/d/1yu9QiZbesaXsBtKueS-j0bi5DXxp0sy7mWnH13K8HtM/edit?usp=drive_link) | [PDF](https://github.com/communitycanvas/documents/raw/0e52c634786d84cfe57fd4b588fb652194c16479/translations/ukrainian/Community%20Canvas%20Minimum%20Viable%20Community%20-%20Ukrainian.pdf)
- Visual Overview: [Sections](https://docs.google.com/drawings/d/1akfUSsjc6fT5ngW6o7q8iXObstYeF0WuwLVx6F3-hSs/edit?usp=drive_link) | [Themes](https://docs.google.com/drawings/d/1ALyLnRlPjH2Q_j7OH0r4P2Ep86Bsqak4pv_MlHAKwv4/edit?usp=drive_link)
*(Image: Community-Canvas-Guidebook-Ukrainian.jpg)*

---

### The Translators (Bios)

**H1**: The Translators

---

#### Alberto Puliafito (#AlbertoPuliafito)
**Contact**: [albertopuliafito@gmail.com](mailto:albertopuliafito@gmail.com) | [albertopuliafito.it](http://albertopuliafito.it)
*(Image: Italian-AlbertoPuliafito.jpg)*

**H2**: Alberto Puliafito (Italian flag emoji)

Alberto Puliafito is the editor and co-founder of Slow News.

In 2005 he founded TvBlog, for which he writes the Malaparte column, and in 2007 he founded the independent production company iK Produzioni.

He has produced light entertainment TV programmes such as Cortesie per gli ospiti, L'Ost, Chef a domicilio, Cuoco gentiluomo, Paint on the road and documentaries on social issues such as Dall'altra parte...

He is the author of Protezione Civile SPA (2010), Croce Rossa. Il lato oscuro della virtu? (2011), DCM - Dal giornalismo al digital content management (2016). He works with content and communities.

---

#### Chi-Hsun Tsai (#Chi-HsunTsai)
**Contact**: [me@jxtsai.info](mailto:me@jxtsai.info) | [jxtsai.info](https://jxtsai.info) | [mydata.network](https://mydata.network)
*(Image: image-asset.png (1595184449576))*

**H2**: Chi-Hsun Tsai (Chinese flag emoji)

Chi-Hsun Tsai (aka jxtsai) is a veteran activist based in Taiwan and founder of "[TWNGO.xyz](https://twngo.xyz)", which provides strategic consulting to local NGOs for enhancing digital civil society. Previously she worked for various advocacy groups like Taiwan Association for Human Rights and Taiwan International...

She also contributes to various localization work of internet freedom projects, such as Tor, SecureDrop, and [PrivacyTools](https://privacytools.io) etc..

---

#### Amir Noureddini (#AmirNoureddini)
**Contact**: [anoureddini@gmail.com](mailto:anoureddini@gmail.com)
*(Image: DSC01918+-+Copy.JPG)*

**H2**: Amir Noureddini (Iranian flag emoji)

Amir has been part of shaping Iran's startup community since its early days. He helped Iran Entrepreneurship Association. Then joined Avatech, the first Iranian Accelerator to grow its entrepreneurial community...

Now, he is working with [Boomerang](http://www.boomerangtt.com/index/index?lang=En), reputable national tech broker company, to help thrive the community of innovators and industry leaders.

Amir also passionately founded [TEDxAUT](http://tedxaut.com/) and always looks for ideas worth spreading. If you have one, just say hi!

---

#### Eder Delgado (#EderDelgado)
**Contact**: [eder@caordical.com](mailto:eder@caordical.com)
*(Image: Spanish-EderDelgado.jpg)*

**H2**: Eder Delgado (Mexican flag emoji)

Eder Delgado has worked with social businesses and civil society organizations in Mexico, Colombia and Chile, helping them build strategies around their purpose. Nowadays, he is co-founder of Caordica...

---

#### Evgeny Reznitsky (#EvgenyReznitsky)
**Contact**: [er@naulab.pro](mailto:er@naulab.pro) | [naulab.pro](https://naulab.pro)
*(Image: Evgenii Reznitskii.jpg)*

**H2**: Evgeny Reznitsky (Russian flag emoji)

Evgeny Reznitsky is a community manager and organizer based in Moscow, Russia. Currently he holds the position of managing partner of "NAU Lab business solutions laboratory" and specializes in consulting...

---

#### Jakub Pacanda (#JakubPacanda)
**Contact**: [jakub@pacanda.cz](mailto:jakub@pacanda.cz)
*(Image: image-asset.jpeg (1543858623202))*

**H2**: Jakub Pacanda (Czech flag emoji)

Founder of [Wuwej](http://Wuwej.com), the first online community building agency in Czech Republic helping czech companies to build great valuable Facebook and Slack communities.

Jakub is also digita nomad living in the van and traveling around Europe.

---

#### Pixie Cigar (#PixieCigar)
**Contact**: [pixie.cigar@gmail.com](mailto:pixie.cigar@gmail.com)
*(Image: Pixie+Cigar)*

**H2**: Pixie Cigar (Chinese flag emoji)

Pixie is a Hungarian Gypsy who spent most of her life in China who believes in nation building no matter which country she is in. Currently based in Kuala Lumpur, Malaysia, her focus as a community builder...

Chapter Head of Tech In Asia KL, COO of Nation Building School and Founding committee of LegalHackers KL (Law Tech Malaysia).

---

#### Tanja Laub (#TanjaLaub)
**Contact**: [hallo@walkaboutmedia.de](mailto:hallo@walkaboutmedia.de) | [walkaboutmedia.de](http://walkaboutmedia.de) | [communitymanagement.de](http://communitymanagement.de)
*(Image: Tanja+Laub)*

**H2**: Tanja Laub (German flag emoji)

Consultant and lecturer for digital communications with a focus on community building and especially on domain communities. She helps organizations with all levels of social media and community management...

She loves to travel the world and meet new cultures and people.

---

#### Tomas Burian (#TomasBurian)
**Contact**: [burian.tom@hotmail.com](mailto:burian.tom@hotmail.com)
*(Image: Burian_Tomas.jpg)*

**H2**: Tomas Burian (Czech flag emoji)

Co-founder of a non-profit organization Unitedfilm which supports and unites independent film makers in Czechia. He mostly organizes various events, writes articles and interviews filmmakers.

In the past he created several multi-media projects and is creative in various fields, mainly writing novels and scripts and digital painting. Despite this he enjoys administrative and management work...

One of his greatest passions is North and Western Europe and study of all the languages spoken in that area. He frequently visits Germany, Denmark, Sweden and Finland and appreciates cold weather. He...

---

### Translations Page Images (Full List)
1. `catalan.jpg`
2. `Screenshot+2020-07-19+at+14.38.46.png` (Chinese)
3. `CommunityCanavas-Czech.jpg`
4. `Community+Canvas+Minimum+Viable+Community+-+Farsi.jpg`
5. `image-asset.png` (1572376423637) (Finnish)
6. `French-Community+Canvas+Summary.jpg`
7. `Community+Canvas+Summary+German.jpg`
8. `Community+Canvas+Visual+Overview+Themes+Color+-+Hebrew.jpg`
9. `Community+Canvas+Guidebook` (Italian - Guidebook link image)
10. `image-asset.png` (1595183221483) (Portuguese)
11. `Screenshot+2020-07-19+at+14.35.22.png` (Portuguese)
12. `Italian-CommunityCanvasGuidebook-Cover.jpg`
13. `Community+Canvas+Guidebook+-+Ukrainian.jpg`
14. `Italian-AlbertoPuliafito.jpg`
15. `image-asset.png` (1595184449576) (Chi-Hsun Tsai)
16. `DSC01918+-+Copy.JPG` (Amir Noureddini)
17. `Spanish-EderDelgado.jpg`
18. `Evgenii Reznitskii.jpg` (URL-encoded Cyrillic)
19. `image-asset.jpeg` (1543858623202) (Jakub Pacanda)
20. `Pixie+Cigar`
21. `Tanja+Laub`
22. `Burian_Tomas.jpg`

---

## PAGE 4: ABOUT (cc-about.html)

**Title**: About -- The Community Canvas
**URL**: `https://community-canvas.org/about`

Standalone page. No section IDs (single content area).

### Content

**H1**: About

---

**H2**: What is the Community Canvas?

**H3**: It is a framework that will help you build a community, analyze a community or improve an existing community.

**Paragraph**: It will allow you to identify all the important areas, help you ask the right questions and give you a structure to ask the right these questions. [Get started](/#get-started).

**H3**: It is not a framework that provides you with the actual answers.

**Paragraph**: Every community is as unique as the humans in it. Therefore, even though most communities share a similar structure, the answers will be wildly different across different kinds of communities. However, we have tried to include general reflections and best practice in our Guidebook that will help you find the right answers.

---

**H2**: What do we mean by "community" and who is this for?

**Paragraph**: If we have learned one thing in the last 15 years of building communities, it is that the word "community" means something different to every person.

**H3**: For us, a community is a type of organization that brings people together and makes them feel like they belong. It ideally gives them an identity that they proudly share and it provides a framework to trust each other more, support each other more, collaborate more and build more meaningful relationships.

*(Image: `image-asset.png` (1494357020985))*

**Paragraph**: That's why we have developed the Canvas for anyone who brings people together with the intention of creating meaningful, long-lasting relationships among them. We hope this framework will be useful for people running a diverse set of organizations, such as fan clubs, HR departments, alumni organizations, startup incubators, the local chamber of commerce, fellowship programs, weekly meetups of outdoor enthusiasts, religious communities, schools and universities, non profits, the soccer club around the corner, summer camps, yearly conferences for pediatric doctors, co-working spaces, social networks for people who care about meditation, sororities, a group of enthusiastic World of Warcraft gamers, monthly dinners to talk about how it feels to have lost a loved one, the local chapter of volunteers for a national political organization, the residents of a small neighborhood, the online forum of a tech startup's most active users, a group of entrepreneurs who support each other, a union of public servants, or the international association of coffee lovers.

*(Image: `2.3+Shared+Experiences.png` - `https://images.squarespace-cdn.com/content/v1/58e7ad2bebbd1a4ffd84fb76/1494357100151-RH83P75MPUHR5AZ9V8DJ/2.3+Shared+Experiences.png`)*

---

**H2**: Why did we create it?

**H3**: The world needs more meaningful communities!

**Paragraph**: We have been building and participating in communities for 15 years and have found tremendous joy and value in them. When humans come together in a meaningful way, magic happens. Communities create trust, seed lifelong friendships, encourage collaborations, spark ideas, unlock resources and give people a sense of home and safety. In a meaningful community we feel that we belong, we are reminded that we are not alone and that we are surrounded by people who care about us.

**H3**: Communities have been around for as long as humanity exists, but in today's global world, where many feel isolated, lonely and divided, strong communities are more needed, and can be more powerful, than ever. Allowing like-minded people to come together and interact can help us tackle big challenges, bridge differences and unleash creativity. This lead us to ask ourselves: how can we help other people build more meaningful communities themselves? How does one actually "build a community"?

*(Image: `image-asset.png` (1494357227067))*

---

**H2**: How we created the Canvas

**Paragraph**: To answer this question we set out on a journey three years ago to develop a framework that could support people who build communities. Our aspiration was to find the underlying questions and patterns that create this sense of belonging in most communities, no matter if in a Fortune 500 corporation, a tennis club or an urban neighborhood. In those years we have looked at hundreds of communities, talked to some of the world's best community builders and tried to distill everything we have learned in our own experiences. And the result is this Community Canvas.

**Paragraph**: We hope that our Canvas will provide a unified template to create more and stronger communities. If you run an organization and the canvas is creating value for you, or if you see ways how we can improve it, please [get in touch](/#get-in-touch), we'd love to hear from you!

---

**H2**: A Sincere Thank You

**Paragraph**: The development of this Canvas would never have been possible without the countless hours of insights and feedback provided by so many community builders across the world - we are incredibly grateful for your contributions and we continue to learn so much from you. We owe this Canvas to your generosity and the amazing work you all do!

**Paragraph**: We hope that by making the Canvas freely accessible to any community builder - aspiring or existing - we get to share your knowledge and kindness with the world.

**Paragraph**: Special thanks to Christine Lai, Casper ter Kuile, Angie Thurston, David Spinks, Alex Simon, Daniel Ospina, Mathias Jakobsen, Scott Shigeoka, Anton Chernikov, Ryan Fix, Michel Bachmann, Nettra Pan, James McBennett, Konstantina Zoehrer, Omri Baumer, and all participants of the Community Canvas workshops!

**Paragraph**: Lastly, we look at the Canvas as work in progress and we are truly thankful for any feedback or advice you might have on how we can improve future versions. Learn more about [our open questions](/#get-in-touch) and please [reach out](/#get-in-touch), thank you!

---

**H2**: Who Created the Canvas?

**Paragraph**: We're three friends who love building communities and believe they bring something special to the world. We'd love to know what you think about the Canvas and how we can help your community. Find out more [here](https://community-canvas.org/home#get-in-touch).

*(Image: `image-asset.png` (1494427426070))*

---

### About Page Images
1. `image-asset.png` (1494357020985) - appears after "community" definition
2. `2.3+Shared+Experiences.png` (1494357100151) - appears after "who is this for" section
3. `image-asset.png` (1494357227067) - appears after "why did we create it"
4. `image-asset.png` (1494427426070) - appears at "Who Created the Canvas"

---

## Image Mapping: CDN URLs to Local Files

| Local Filename | CDN URL Path (after /58e7ad2bebbd1a4ffd84fb76/) | Used On |
|---|---|---|
| CommunityCanvas-LogoMark-Stacked.png | 1494374536468-.../CommunityCanvas-LogoMark-Stacked.png | All pages (logo) |
| CommunityCanvas-Cover-Clean.jpg | 1494452713197-.../170510-CommunityCanvas-Cover-Clean.jpg | Home (hero bg) |
| Illustration-1.2-Identity.png | 1494421565994-.../Illustration-1.2+Identity.png | Home S2 |
| image-asset-1494353912260.png | 1494353912260-.../image-asset.png | Home S2 |
| image-asset-1494260552943.png | 1494260552943-.../image-asset.png | Home S2 |
| Illustration-2.1-Selection.png | 1494421124447-.../Illustration-2.1+Selection+.png | Home S2 |
| Illustration-2.5-Content.png | 1494421227448-.../Illustration-2.5+Content.png | Home S2 |
| VisualOverview-Themes-Color.png | 1494943467747-.../Community+Canvas+Summary | Home S3 |
| (Guidebook cover) | 1494943215465-.../Community+Canvas+Guidebook | Home S3 |
| image-asset-1505155144706.png | 1505155144706-.../image-asset.png | Home S3 (MVC) |
| Cover-Worksheet-Thumb-Summary.jpg | 1494945820913-.../170510-CommunityCanvas-Cover-Worksheet-Thumb+Summary.jpg | Home S3 |
| Cover-Worksheet-Thumb-Doc.jpg | 1494945828970-.../170510-CommunityCanvas-Cover-Worksheet-Thumb+-Doc.jpg | Home S3 |
| Illustration-Extra-Translation.png | 1527716352822-.../Illustration-Extra-Translation.png | Home S3 |
| Illustration-2.7-Roles.png | 1494425835865-.../Illustration-2.7+Roles.png | Home S4 |
| image-asset-1494354005673.jpeg | 1494354005673-.../image-asset.jpeg | Home S4 (Fabian) |
| image-asset-1494354251971.jpeg | 1494354251971-.../image-asset.jpeg | Home S4 (Nico) |
| Portrait-Small.jpg | 1597162399073-.../Portrait-Small.jpg | Home S4 (Sascha) |
| image-asset-1494355703592.png | 1494355703592-.../image-asset.png | Footer (all pages) |
| image-asset-1494357020985.png | 1494357020985-.../image-asset.png | About |
| 2.3-Shared-Experiences.png | 1494357100151-.../2.3+Shared+Experiences.png | About |
| image-asset-1494357227067.png | 1494357227067-.../image-asset.png | About |
| image-asset-1494427426070.png | 1494427426070-.../image-asset.png | About |

---

## Squarespace Block Type Reference

Block types found in the HTML:
- Type `1` = Text/HTML block
- Type `2` = Image block
- Type `5` = Code block (custom HTML/JS)
- Type `47` = Horizontal rule
- Type `1337` = Spacer block

## Key Template Settings (from tweakJSON)

- `tweak-index-nav-position`: Right
- `tweak-index-nav-style`: expanding-horizontal-lines
- `tweak-index-nav-text-show`: true
- `tweak-index-page-min-height`: 100vh
- `tweak-index-page-fullscreen`: None
- `tweak-footer-layout`: Columns
- `tweak-mobile-breakpoint`: 960px
- `tweak-site-ajax-loading-enable`: false
- `tweak-site-border-show`: false
- `tweak-index-gallery-height`: 100vh
- `tweak-index-gallery-fixed-height`: true
- `tweak-index-gallery-autoplay-enable`: true
- `tweak-index-gallery-transition`: Fade
