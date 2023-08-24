import Image from 'next/image'

export default function Home() {
  return (
  <div className="bg-slate-400">
        <table cellspacing="20">
          <tr>
            <td><img src="/img/img-modified.png" alt="author" width="400" height="400" /></td> 
            <td>  <h1>KX</h1>
              <p><em>Founder of Void and Author of <a href="https://karnovah.com/" rel="noreferrer" target="_blank">Karnovah</a></em></p>
              <p>I am an upcoming Web Dev</p>
            </td>
          </tr>
        </table>
        <hr />
          <h3>Books and Courses</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <hr />
            <h3>Work Experience</h3>
            <table>
              <thead>
                <tr>
                  <th>Dates</th>
                  <th>Work</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
              <tfoot>

              </tfoot>
              <tr>
                <td>2003-2023</td>
                <td>Lead Programmer of My Self</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>2017 Researcher at The Bruh</td>
              </tr>
            </table>
            <hr />
              <h3>Skills</h3>
              <table cellspacing="7">
                <tr>
                  <td>Java</td>
                  <td>&#9733;&#9733;&#9734;&#9734;&#9734;</td>
                  <td>Powershell</td>
                  <td>&#9733;&#9733;&#9733;&#9734;&#9734;</td>
                </tr>
                <tr>
                  <td>LaTeX</td>
                  <td>&#9733;&#9733;&#9733;&#9733;&#9734;</td>
                  <td>Tailwind CSS</td>
                  <td>&#9733;&#9734;&#9734;&#9734;&#9734;</td>
                </tr>
                <tr>
                  <td>Vim</td>
                  <td>&#9733;&#9733;&#9733;&#9734;&#9734;</td>
                </tr>
              </table>
              <hr />
                <a href="hobbies.html">Hobbies</a>
                <a href="contacts.html">Contacts</a>
          </div>
          )
}
