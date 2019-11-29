/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
// components
import Article from './Article';

const Articles = ({ displayId, onClose, active }) => {
  return (
    <div id="main">
      <Article id="info" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">Info</h2>
          <p>
            Our wedding service at{' '}
            <a
              href="https://www.google.com/maps/place/St+Andrews+Street+Baptist+Church/@52.2025988,0.1238654,15z/data=!4m2!3m1!1s0x0:0x30543064effa33a9?sa=X&ved=2ahUKEwifyYPIqNzhAhUFheAKHW_aBT4Q_BIwDXoECAgQCA"
              target="_blank"
              rel="noopener noreferrer"
            >
              St Andrew&apos;s Street Baptist Church
            </a>{' '}
            (CB2 3AR) starts at 2:30pm. There will be a bus to transport you from the church to the
            reception - with dinner, speeches and dancing until midnight.
          </p>
          <h3 className="major">Travel</h3>
          <p>
            St Andrew&apos;s Street Baptist Church is a flintstone building on St Andrew&apos;s
            Street, almost opposite the University Arms Hotel and next to the Regal pub (see below).
            It is a 20 minute walk or short taxi ride from Cambridge station. If you would like to
            drive there are two nearby multi-storey car parks - Queen Anne Terrace or in the Grand
            Arcade shopping centre. The centre of Cambridge has some tricky one way systems and is
            very busy on Saturday afternoons, so please leave plenty of time!
          </p>
        </>
      </Article>
      <Article id="work" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src="/static/images/pic02.jpg" alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien
            imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet
            magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula
            tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
            orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna
            magna sed nunc rhoncus amet feugiat tempus.
          </p>
        </>
      </Article>
      <Article id="about" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">About</h2>
          <span className="image main">
            <img src="/static/images/pic03.jpg" alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim
            arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
            fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus
            ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras
            viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
          </p>
        </>
      </Article>
      <Article id="contact" active={active} displayId={displayId} onClose={onClose}>
        <>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="fields">
              <div className="field half">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4" />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="primary" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </>
      </Article>
      <Article id="elements" active={active} displayId={displayId} onClose={onClose}>
        <h2 className="major">Elements</h2>
        <section>
          <h3 className="major">Text</h3>
          <p>
            This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this
            is <em>emphasized</em>. This is <sup>superscript</sup> text and this is{' '}
            <sub>subscript</sub> text. This is <u>underlined</u> and this is code:{' '}
            <code>{`for (;;) { ... }`}</code>. Finally, <a href="#">this is a link</a>.
          </p>
          <hr />
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>
          <hr />
          <h4>Blockquote</h4>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus
            euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu
            felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.
          </blockquote>
          <h4>Preformatted</h4>
          <pre>
            <code>{`i = 0;

while (!deck.isInOrder()) {
print 'Iteration ' + i;
deck.shuffle();
i++;
}

print 'It took ' + i + ' iterations to sort the deck.';`}</code>
          </pre>
        </section>
        <section>
          <h3 className="major">Lists</h3>

          <h4>Unordered</h4>
          <ul>
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis adipiscing.</li>
            <li>Felis enim feugiat.</li>
          </ul>

          <h4>Alternate</h4>
          <ul className="alt">
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis adipiscing.</li>
            <li>Felis enim feugiat.</li>
          </ul>

          <h4>Ordered</h4>
          <ol>
            <li>Dolor pulvinar etiam.</li>
            <li>Etiam vel felis viverra.</li>
            <li>Felis enim feugiat.</li>
            <li>Dolor pulvinar etiam.</li>
            <li>Etiam vel felis lorem.</li>
            <li>Felis enim et feugiat.</li>
          </ol>
          <h4>Icons</h4>
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github">
                <span className="label">Github</span>
              </a>
            </li>
          </ul>

          <h4>Actions</h4>
          <ul className="actions">
            <li>
              <a href="#" className="button primary">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
          </ul>
          <ul className="actions stacked">
            <li>
              <a href="#" className="button primary">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="major">Table</h3>
          <h4>Default</h4>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item One</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item Two</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item Three</td>
                  <td> Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item Four</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item Five</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" />
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <h4>Alternate</h4>
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item One</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item Two</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item Three</td>
                  <td> Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item Four</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item Five</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" />
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <section>
          <h3 className="major">Buttons</h3>
          <ul className="actions">
            <li>
              <a href="#" className="button primary">
                Primary
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Default
              </a>
            </li>
            <li>
              <a href="#" className="button small">
                Small
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <a href="#" className="button primary icon solid fa-download">
                Icon
              </a>
            </li>
            <li>
              <a href="#" className="button icon solid fa-download">
                Icon
              </a>
            </li>
          </ul>
          <ul className="actions">
            <li>
              <span className="button primary disabled">Disabled</span>
            </li>
            <li>
              <span className="button disabled">Disabled</span>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="major">Form</h3>
          <form>
            <div className="fields">
              <div className="field half">
                <label htmlFor="demo-name">Name</label>
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  value=""
                  placeholder="Jane Doe"
                  onChange={() => {}}
                />
              </div>
              <div className="field half">
                <label htmlFor="demo-email">Email</label>
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  value=""
                  placeholder="jane@untitled.tld"
                  onChange={() => {}}
                />
              </div>
              <div className="field">
                <label htmlFor="demo-category">Category</label>
                <select name="demo-category" id="demo-category">
                  <option value="">-</option>
                  <option value="1">Manufacturing</option>
                  <option value="1">Shipping</option>
                  <option value="1">Administration</option>
                  <option value="1">Human Resources</option>
                </select>
              </div>
              <div className="field half">
                <input
                  type="radio"
                  id="demo-priority-low"
                  name="demo-priority"
                  checked
                  onChange={() => {}}
                />
                <label htmlFor="demo-priority-low">Low</label>
              </div>
              <div className="field half">
                <input type="radio" id="demo-priority-high" name="demo-priority" />
                <label htmlFor="demo-priority-high">High</label>
              </div>
              <div className="field half">
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Email me a copy</label>
              </div>
              <div className="field half">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  checked
                  onChange={() => {}}
                />
                <label htmlFor="demo-human">Not a robot</label>
              </div>
              <div className="field">
                <label htmlFor="demo-message">Message</label>
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows="6"
                />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="primary" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
        </section>
      </Article>
    </div>
  );
};

Articles.defaultProps = {
  displayId: null,
  active: false,
};

Articles.propTypes = {
  displayId: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default Articles;
