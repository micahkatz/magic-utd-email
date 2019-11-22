import React from 'react';
import Bold from '../comps/bold';
import RedBold from '../comps/redBold';
import Link from '../comps/link';

/*

  Edit this file to change what is in the email

  <h1> - big header text
  <p> - paragraph (regular) text
  <Bold> - bold text
  <RedBold> - bold text with red color
  <Link url="exampleurl"> - text that links to a page. Set the url prop to the url you want

  Make sure to close each opening <> with a closing </>

  use "yarn start" to run the website and control-a to select all and copy to your email

*/

function EmailContent() {
  return (
    <>
      <h1>Reminder: Meeting <RedBold>Tonight</RedBold></h1>
      <p>

        We are excited to teach you how to perform <Bold>street magic</Bold> for this week's Magic Monday.
        The meeting will at <RedBold>6pm in SU Galaxy Room A. </RedBold>
        Meetings will be announced by email or in the{' '}
        <Link
          url= "https://groupme.com/join_group/55052107/ZqJbIZ6n"
        >
          GroupMe
        </Link>
        . See you <Bold>tonight</Bold>!
      </p>
      <p>
        Be sure to follow us on social media for reminders and updates!
      </p>
      <p>
        <Bold>See Attached Document for Map</Bold>
      </p>
    </>
  );
}

export default EmailContent;
