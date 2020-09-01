## MVP 2

For the next iteration, I decided to simplify the surface area of the app. At the start of the last MVP, I cut it down from running a boot camp to focusing on a match-made portfolio feedback platform. I cut the matchmaking part of the product out and focused only on giving & receiving feedback. The product would generate a unique link for every user that they could use to receive feedback from anyone they wanted portfolio feedback from. 

To test this idea, I decided that I would need to have authentication behind it to secure the data. The previous version I built had no authentication whatsoever. The user had a unique link that I emailed to them that wasn’t protected via their login. I've never done anything like this before so I threw myself into learning the ins & outs of learning how I might do authentication.

AWS Amplify made it easy for me to start tinkering with different authentication frameworks. I selected AWS Cognito (fn) for the authentication part & then quickly linked up AWS AppSync (fn) for the database layer.[Chakra UI] was really helpful to quickly build a bare bones, but nice UI.

I started running into issues as soon as I wanted to go beyond the bare bones experience. My desire to create a nice login experience meant that I needed to figure out how to customise the AWS default Cognito experience. This was when the project went from a quick validation of the product idea to learning how to build a robust web app. 

My focus shifted from quick product experiments to in-depth technical experimentation. For context, the COVID-19 pandemic had started hitting Australia and we were in our first lockdown. Reading documentation & writing code felt like a good way to spend my time and it made the first couple of months of lockdown fly. However, I lost my focus of creating something that people would use.

During this time, I built a functioning webapp that did the following:
1. Sign up & log in to the service
2. Generate a unique link for the user
3. Records any feedback that was sent to that user

If you’d like to try it out for yourself, visit folio.camp & sign up for an account.

(img)

Whilst I was in deep in the code, I wanted to show a screenshot of the designer’s portfolio. I've used Chrome Puppeteer beforehand and knew that it was possible. This was the start of another technical rabbit hole. I played around with some of the AWS tooling to see if I could get my head around setting a screenshot service up. Sadly, I found that this very quickly went over my head.

From this point, I decided to change the backend architecture of the app. I found the Hasura project, which felt like it could do all the things I need it to do. Their documentation on https://3factor.app/ patterns made sense to me and was something I felt like I could implement. A couple of weeks passed as I tried to figure out how to host the backend myself and had to learn Docker. This felt like another world & I enjoyed getting my hands dirty with the technical side of things.

After I got my migration to Hasura completed, I realised that I had gone down another rabbit hole and needed to get the product in front of people again. I asked friends for their help and they quickly got people who'd be interested in using the product.  

Two people signed up for the product, and sent their links over to us to get our feedback on their portfolios. It was interesting to use what I built to give feedback. Since the content of each portfolio varied (e.g. the content, the style, the writing), each piece of feedback would need to be unique to that person. The form I built didn't assist with this at all, it was a dumb form for someone to enter that data in. 

When reflecting on this time, I’m conscious that I wasn't doing anything to validate whether people wanted the product, but tinkering with what I built. The effort I spent on previous iterations was influencing my thinking. I wasn’t able to critically think about whether the product I was building was working for people. 

I would've been better served if I kept the end goal in my mind, without the hubris of believing I was on the right path and testing the assumptions I had as quickly as possible. I’ve learnt that I need to figure out how to distill the idea into the smallest testable kernel. It's easy to sink a large amount of time & effort into an idea and get caught up in the execution of the idea. The trick is to balance strategy & execution, both are as important as each other and you can't lose sight of either.