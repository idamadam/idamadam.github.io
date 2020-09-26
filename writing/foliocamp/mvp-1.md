## MVP 1

When thinking about the workshop idea, I realised I didn’t put a lot of thought onto how I could group people together. The concept of video game matchmaking came to my mind when thinking about how I could solve the problem. What if portfolio building was like a game, where you get matched to people around the world with similar skill levels to you and you work together to make your portfolio. This was an extension of the bootcamp idea, focusing on distribution and onboarding.

I realised that committing strangers together for a couple of weeks for a project might not work. When thinking about something that I could commit people to, I thought feedback might be a good, time-boxed activity that everyone could get value from. (fn)

To test this idea, I created a landing page again. I created a logo and got to work on designing a simple form to get people's emails signed up. For the design of the page, I drew inspiration from the pages for [Play Date] & the [Goose Game]. I created a quick mood board and derived a colour palette & typography styles.  I chose a simple yellow colour with big, bold text to draw people in. The [Open Doodles] illustration library by Pablo Stanley gave a nice touch of personality to the website.
(img)

The HTML for the page was simple to set up but I needed a way to collect people's emails. I used Mailchimp to send new signups an automatic email from me confirming that they were in.

(img)

Now that the page was built, I needed emails! I asked a couple of friends if they'd be keen and got a couple of emails but it was slow going. I found that I was hitting a block when it came to telling people about what I was working on. It was easy to build something, but putting it out there was harder than the building part. 

The breakthrough moment for me was when a friend of mine put the link up in a Slack group and I started getting signups from people I didn't know. ++Add something to show my excitement.++I took this as a signal that there was latent demand for a product which meant that it was time to take it to MVP.

I diagrammed a rough flow where I'd be manually grouping people together & emailing them to say that they were successfully matched. From there, they could go to a page where they could view the people they've been matched up with. I had this idea that people could submit their feedback as a video to make it more personal.

(img)

++ Needs to be interactive++

To bring this to life, I had to get my hands dirty with code. I've dabbled with React web apps before, but I've never had something that talked to a database before. I struggle with AWS at the best of times, so I needed to keep it as simple as possible. Luckily, I found [Fauna] which I could set up as a data API which my front-end could talk to. 

The architecture of my application was hacky, but it was the most sophisticated thing I've built at the time. I created a web app which spoke to Fauna and pulled the details of the users. I wrote a script to manually write the data into Fauna as I made matches, and then sent emails out through Mailchimp as I found matches. 

(img)

After doing this work, I sent out emails to a couple of cohorts but I quickly found out that people did not open their emails. ++ Can I illustrate conversion rates here? ++For the people who opened their emails, I found that no one submitted any feedback. Timing may have been an issue since I sent the emails around Christmas/New Year and people could've been with their families. 

If I'm being honest, I found this experience discouraging. I had spent a significant amount of time trying to figure out the technology and building something out. In hindsight, I realised that I should've been spending my time & energy on figuring out how I could validate these assumptions instead of building software. 