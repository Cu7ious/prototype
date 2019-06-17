import './AppTheme.css';

import React from 'react';

export default function App() {
  return (
    <div id="doc-wrapper">
      {renderNavigation()}
      <div id="doc" role="document">
        {renderBanner()}
        <br />
        <main role="main">
          <section id="text">
            <h1>Text</h1>
            <hr/>
            {renderTextHeadings()}
            {renderTextParagraphs()}
            {renderTextBlockquotes()}
            {renderTextLists()}
            {renderTextHr()}
            {renderTextTables()}
            {renderTextCode()}
            {renderTextInline()}
          </section>
            <br/>
          <section id="embedded">
            <h1>Embedded Content</h1>
            <hr />
            {renderEmbedImages()}
            {renderEmbedAudio()}
            {renderEmbedVideo()}
            {renderEmbedCanvas()}
            {renderEmbedMeter()}
            {renderEmbedProgress()}
            {renderEmbedSVG()}
            {renderEmbedIframe()}
          </section>
            <br/>
          <section id="forms">
            <h1>Form Elements</h1>
            <hr />
            <form>
              {renderFormInputs()}
              {renderFormSelects()}
              {renderFormCheckboxes()}
              {renderFormRadio()}
              {renderFormTextareas()}
              {renderFormHTML5()}
              {renderFormAction()}
            </form>
          </section>
        </main>
      </div>
      <style dangerouslySetInnerHTML={renderStyles()} />
    </div>
  );
}

const renderStyles = () => ({
  __html: `
      body {
        background-color: #ededed
      }

      #doc-wrapper {
        grid-template-columns: 20% 80%;
        padding: 3.125rem 0 3.125rem;
        display: grid
      }

      #sticked {
        position: fixed
      }

      #doc {
        box-shadow: 0px 2px 24px 1px #ccc;
        background-color: #fff;
        padding: 3.125rem
      }

      #sticked,
      #sticked h2,
      #doc header h1 {
        margin-top: 0
      }
  `
});

const renderLinkToTop = () => <p><a href="#top">[Top]</a></p>;

const renderNavigation = () => (
  <nav id="toc" role="navigation">
    <ul id="sticked" >
    <h2>Table of Contents</h2>
      <li>
        <a href="#text">Text</a>
        <ul>
          <li><a href="#text__headings">Headings</a></li>
          <li><a href="#text__paragraphs">Paragraphs</a></li>
          <li><a href="#text__blockquotes">Blockquotes</a></li>
          <li><a href="#text__lists">Lists</a></li>
          <li><a href="#text__hr">Horizontal rules</a></li>
          <li><a href="#text__tables">Tabular data</a></li>
          <li><a href="#text__code">Code</a></li>
          <li><a href="#text__inline">Inline elements</a></li>
        </ul>
      </li>
      <li>
        <a href="#embedded">Embedded content</a>
        <ul>
          <li><a href="#embedded__images">Images</a></li>
          <li><a href="#embedded__audio">Audio</a></li>
          <li><a href="#embedded__video">Video</a></li>
          <li><a href="#embedded__canvas">Canvas</a></li>
          <li><a href="#embedded__meter">Meter</a></li>
          <li><a href="#embedded__progress">Progress</a></li>
          <li><a href="#embedded__svg">Inline SVG</a></li>
          <li><a href="#embedded__iframe">IFrames</a></li>
        </ul>
      </li>
      <li>
        <a href="#forms">Form elements</a>
        <ul>
          <li><a href="#forms__input">Input fields</a></li>
          <li><a href="#forms__select">Select menus</a></li>
          <li><a href="#forms__checkbox">Checkboxes</a></li>
          <li><a href="#forms__radio">Radio buttons</a></li>
          <li><a href="#forms__textareas">Textareas</a></li>
          <li><a href="#forms__html5">HTML5 inputs</a></li>
          <li><a href="#forms__action">Action buttons</a></li>
        </ul>
      </li>
      <footer id="footer" role="contentinfo">
        <p>Made by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Cu7ious">Cu7ious</a>.</p>
        <p>Based on <a target="_blank" rel="noopener noreferrer" href="http://github.com/cbracco/html5-test-page">work</a> of @cbracco.</p>
      </footer>
    </ul>
  </nav>
);

const renderBanner = () => (
  <header role="banner">
    <h1>HTML5 Test Page</h1>
    <p>This is a test page filled with common HTML elements to be used to provide visual feedback whilst building CSS systems and frameworks.</p>
  </header>
);

const renderTextHeadings = () => (
  <article id="text__headings">
    <header>
      <h1>Headings</h1>
    </header>
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderTextParagraphs = () => (
  <article id="text__paragraphs">
    <header>
      <h1>Paragraphs</h1>
    </header>
    <div>
      <p>A paragraph (from the Greek paragraphos, “to write beside” or “written beside”) is a self-contained
        unit
        of
        a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more
        sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of
                formal writing, used to organize longer prose.</p>
    </div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderTextBlockquotes = () => (
  <article id="text__blockquotes">
    <header>
      <h1>Blockquotes</h1>
    </header>
    <div>
      <blockquote>
        <p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text.</p>
        <p>It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom.</p>
        <cite><a href="#!">Said no one, ever.</a></cite>
      </blockquote>
    </div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderTextLists = () => (
  <article id="text__lists">
    <header>
      <h1>Lists</h1>
    </header>
    <div>
      <h3>Definition list</h3>
      <dl>
        <dt>Definition List Title</dt>
        <dd>This is a definition list division.</dd>
      </dl>
      <h3>Ordered List</h3>
      <ol>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ol>
      <h3>Unordered List</h3>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
    </div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderTextHr = () => (
  <article id="text__hr">
    <header>
      <h1>Horizontal rules</h1>
    </header>
    <div>
      <hr />
    </div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderTextTables = () => (
  <article id="text__tables">
    <header>
      <h1>Tabular data</h1>
    </header>
    <table>
      <caption>Table Caption</caption>
      <thead>
        <tr>
          <th>Table Heading 1</th>
          <th>Table Heading 2</th>
          <th>Table Heading 3</th>
          <th>Table Heading 4</th>
          <th>Table Heading 5</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Table Footer 1</th>
          <th>Table Footer 2</th>
          <th>Table Footer 3</th>
          <th>Table Footer 4</th>
          <th>Table Footer 5</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
        <tr>
          <td>Table Cell 1</td>
          <td>Table Cell 2</td>
          <td>Table Cell 3</td>
          <td>Table Cell 4</td>
          <td>Table Cell 5</td>
        </tr>
      </tbody>
    </table>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderTextCode = () => (
  <article id="text__code">
    <header>
      <h1>Code</h1>
    </header>
    <div>
      <p><strong>Keyboard input:</strong> <kbd>Cmd</kbd></p>
      <p><strong>Inline code:</strong> <code>&lt;div&gt;code&lt;/div&gt;</code></p>
      <p><strong>Sample output:</strong> <samp>This is sample output from a computer program.</samp></p>
      <h2>Pre-formatted text</h2>
      <pre>{`
  P R E F O R M A T T E D T E X T
  ! " # $ % & ' ( ) * + , - . / \\
  0 1 2 3 4 5 6 7 8 9 : ; < = > ?
  @ A B C D E F G H I J K L M N O
  P Q R S T U V W X Y Z [ \\ ] ^ _
  \` a b c d e f g h i j k l m n o
  p q r s t u v w x y z { | } ~ &
      `}</pre>
    </div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderTextInline = () => (
  <article id="text__inline">
    <header>
      <h1>Inline elements</h1>
    </header>
    <div>
      <p><a href="#!">This is a text link</a>.</p>
      <p><strong>Strong is used to indicate strong importance.</strong></p>
      <p><em>This text has added emphasis.</em></p>
      <p>The <b>b element</b> is stylistically different text from normal text, without any special importance.</p>
      <p>The <i>i element</i> is text that is offset from the normal text.</p>
      <p>The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation.</p>
      <p><del>This text is deleted</del> and <ins>This text is inserted</ins>.</p>
      <p><s>This text has a strikethrough</s>.</p>
      <p>Superscript<sup>®</sup>.</p>
      <p>Subscript for things like H<sub>2</sub>O.</p>
      <p><small>This small text is small for for fine print, etc.</small></p>
      <p>Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr></p>
      <p><q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation.</q></p>
      <p><cite>This is a citation.</cite></p>
      <p>The <dfn>dfn element</dfn> indicates a definition.</p>
      <p>The <mark>mark element</mark> indicates a highlight.</p>
      <p>The <var>variable element</var>, such as <var>x</var> = <var>y</var>.</p>
      <p>The time element: <time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time></p>
    </div>
    <footer>
      {/* {renderLinkToTop()} */}
    </footer>
  </article>
);

// Embedded Content
const renderEmbedImages = () => (
  <article id="embedded__images">
    <header>
      <h2>Images</h2>
    </header>
    <div>
      <h3>No <code>&lt;figure&gt;</code> element</h3>
      <p><img src="http://placekitten.com/480/480" alt="" /></p>
      <h3>Wrapped in a <code>&lt;figure&gt;</code> element, no <code>&lt;figcaption&gt;</code></h3>
      <figure><img src="http://placekitten.com/420/420" alt="" /></figure>
      <h3>Wrapped in a <code>&lt;figure&gt;</code> element, with a <code>&lt;figcaption&gt;</code></h3>
      <figure>
        <img src="http://placekitten.com/420/420" alt="" />
        <figcaption>Here is a caption for this image.</figcaption>
      </figure>
    </div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderEmbedAudio = () => (
  <article id="embedded__audio">
    <header>
      <h2>Audio</h2>
    </header>
    <div><audio controls>audio</audio></div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderEmbedVideo = () => (
  <article id="embedded__video">
    <header>
      <h2>Video</h2>
    </header>
    <div><video controls>video</video></div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderEmbedCanvas = () => (
  <article id="embedded__canvas">
    <header>
      <h2>Canvas</h2>
    </header>
    <div><canvas>canvas</canvas></div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderEmbedMeter = () => (
  <article id="embedded__meter">
    <header>
      <h2>Meter</h2>
    </header>
    <div><meter value="2" min="0" max="10">2 out of 10</meter></div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderEmbedProgress = () => (
  <article id="embedded__progress">
    <header>
      <h2>Progress</h2>
    </header>
    <div><progress>progress</progress></div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderEmbedSVG = () => (
  <article id="embedded__svg">
    <header>
      <h2>Inline SVG</h2>
    </header>
    <div><svg width="100px" height="100px">
      <circle cx="100" cy="100" r="100" fill="#1fa3ec"></circle>
    </svg></div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

const renderEmbedIframe = () => (
  <article id="embedded__iframe">
    <header>
      <h2>IFrame</h2>
    </header>
    <div><iframe title="embedded__iframe" src="https://necolas.github.io/normalize.css/" height="300"></iframe></div>
    <footer>
      {renderLinkToTop()}
    </footer>
  </article>
);

// Form Elements
const renderFormInputs = () => (
  <>
    <fieldset id="forms__input">
      <legend>Input fields</legend>
      <p>
        <label htmlFor="input__text">Text Input</label>&#160;
        <input id="input__text" type="text" placeholder="Text Input" />
      </p>
      <p>
        <label htmlFor="input__password">Password</label>&#160;
        <input id="input__password" type="password" autoComplete="password" placeholder="Type your Password" />
      </p>
      <p>
        <label htmlFor="input__webaddress">Web Address</label>&#160;
        <input id="input__webaddress" type="url" placeholder="http://yoursite.com" />
      </p>
      <p>
        <label htmlFor="input__emailaddress">Email Address</label>&#160;
        <input id="input__emailaddress" type="email" placeholder="name@email.com" />
      </p>
      <p>
        <label htmlFor="input__phone">Phone Number</label>&#160;
        <input id="input__phone" type="tel" placeholder="(999) 999-9999" />
      </p>
      <p>
        <label htmlFor="input__search">Search</label>&#160;
        <input id="input__search" type="search" placeholder="Enter Search Term" />
      </p>
      <p>
        <label htmlFor="input__text2">Number Input</label>&#160;
        <input id="input__text2" type="number" placeholder="Enter a Number" />
      </p>
      <p>
        <label htmlFor="input__text3" >Error</label>&#160;
        <input id="input__text3" type="text" placeholder="Text Input" />
      </p>
      <p>
        <label htmlFor="input__text4" >Valid</label>&#160;
        <input id="input__text4" type="text" placeholder="Text Input" />
      </p>
    </fieldset>
    {renderLinkToTop()}
  </>
);

const renderFormSelects = () => (
  <>
    <fieldset id="forms__select">
      <legend>Select menus</legend>
      <p>
        <label htmlFor="select">Select</label>&#160;
        <select id="select">
          <optgroup label="Option Group">
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </optgroup>
        </select>
      </p>
    </fieldset>
    {renderLinkToTop()}
  </>
);

const renderFormCheckboxes = () => (
  <>
    <fieldset id="forms__checkbox">
      <legend>Checkboxes</legend>
      <ul>
        <li>
          <label htmlFor="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" defaultChecked /> Choice A</label>
        </li>
        <li>
          <label htmlFor="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox" /> Choice B</label>
        </li>
        <li>
          <label htmlFor="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox" /> Choice C</label>
        </li>
      </ul>
    </fieldset>
    {renderLinkToTop()}
  </>
);

const renderFormRadio = () => (
  <>
    <fieldset id="forms__radio">
      <legend>Radio buttons</legend>
      <ul>
        <li><label htmlFor="radio1"><input id="radio1" name="radio" type="radio" defaultChecked /> Option 1</label></li>
        <li><label htmlFor="radio2"><input id="radio2" name="radio" type="radio" /> Option 2</label></li>
        <li><label htmlFor="radio3"><input id="radio3" name="radio" type="radio" /> Option 3</label></li>
      </ul>
    </fieldset>
    {renderLinkToTop()}
  </>
);

const renderFormTextareas = () => (
  <>
    <fieldset id="forms__textareas">
      <legend>Textareas</legend>
      <p>
        <label htmlFor="textarea">Textarea</label>&#160;
        <textarea id="textarea" rows={8} cols={48} placeholder="Enter your message here" />
      </p>
    </fieldset>
    {renderLinkToTop()}
  </>
);

const renderFormHTML5 = () => (
  <>
    <fieldset id="forms__html5">
      <legend>HTML5 inputs</legend>
      <p>
        <label htmlFor="ic">Color input</label>&#160;
        <input type="color" id="ic" defaultValue="#000000" />
      </p>
      <p>
        <label htmlFor="in">Number input</label>&#160;
        <input type="number" id="in" min="0" max="10" defaultValue="5" />
      </p>
      <p>
        <label htmlFor="ir">Range input</label>&#160;
        <input type="range" id="ir" defaultValue="10" />
      </p>
      <p>
        <label htmlFor="idd">Date input</label>&#160;
        <input type="date" id="idd" defaultValue="1970-01-01" />
      </p>
      <p>
        <label htmlFor="idm">Month input</label>&#160;
        <input type="month" id="idm" defaultValue="1970-01" />
      </p>
      <p>
        <label htmlFor="idw">Week input</label>&#160;
        <input type="week" id="idw" defaultValue="1970-W01" />
      </p>
      <p>
        <label htmlFor="idt">Datetime input</label>&#160;
        <input type="datetime" id="idt" defaultValue="1970-01-01T00:00:00Z" />
      </p>
      <p>
        <label htmlFor="idtl">Datetime-local input</label>&#160;
        <input type="datetime-local" id="idtl" defaultValue="1970-01-01T00:00" />
      </p>
    </fieldset>
    {renderLinkToTop()}
  </>
);

const renderFormAction = () => (
  <>
    <fieldset id="forms__action">
      <legend>Action buttons</legend>
      <p>
        <input type="submit" defaultValue="<input type=submit>" />
        <input type="button" defaultValue="<input type=button>" />
        <input type="reset" defaultValue="<input type=reset>" />
        <input type="submit" defaultValue="<input disabled>" disabled />
      </p>
      <p>
        <button type="submit">&lt;button type=submit&gt;</button>
        <button type="button">&lt;button type=button&gt;</button>
        <button type="reset">&lt;button type=reset&gt;</button>
        <button type="button" disabled>&lt;button disabled&gt;</button>
      </p>
    </fieldset>
    {renderLinkToTop()}
  </>
);
