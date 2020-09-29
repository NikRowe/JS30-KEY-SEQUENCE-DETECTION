# JS30 Key Sequence Detection
Exercise 12 in WesBos' JavaScript30 tutorials. 

This one was a blast! Maybe because you were creating secret codes and as if some sort of 007 spy, or maybe because it felt nostalgic to the days of Super Mario & GoldenEye. 

This really reinforced looking at object and event properties to find parts I could use to manipulate how I'd like. <br>
For my bonus: <br> 
<ul>
    <li>I added a small, fun quiz of three (3) entry level JS questions who's answer values correspond to a 2nd secret code.</li>
    <li>Upon getting 100% on the quiz, a word puzzle is displayed within the Console.</li>
    <li>If you can guess the super secret code, you have decoded the cypher! </li>
</ul>
I had to change the tutorial logic a bit for the quiz values; I didn't want the user to have to get 100% on the first try, or have to go back and re-select the correct answers in the precise order to trigger the secret code. That's not intuitive.  
<br>
I wanted the desired effect to be such that the user can change answers and as long as the secretCode was in the array they would trigger the code. I used some simple CSS styling to communicate to the user that they have the correct/incorrect answer before moving on. 

<p>
<a href="https://nikrowedevjs30-key-sequence-detection.netlify.app/">Demo</a>
</p>
<span>Resource:</span>
<a href="https://www.gavsblog.com/blog/find-single-or-array-of-values-in-javascript-array-using-includes">gavsblog.com</a>