<!DOCTYPE html>
<html>
  <head>
    <title>Artemis Protocols</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
  </head>
  <body class="container">
    <div class="row">
      <nav class="navsidebar col-xs-3">
        <ul id="sidebar" class="nav nav-stacked"></ul>
      </nav>
      <content class="col-xs-9">
        <h1>Artemis Protocols</h1>
        <section id="intro">
          <h2>Introduction</h2>
          <p>
            This is unoffical documentation of the network and file protocols used by
            <a href="http://www.artemis.eochu.com/" target="_new"><cite>Artemis Spaceship Bridge Simulator</cite></a>.
            No official documentation exists, so the information in this document has been obtained
            through community reverse-engineering efforts. There will be parts of the protocols that
            are not completely documented because their purpose has not been determined, and some
            parts may not be accurate. Contributions to this documentation are welcome.
          </p>
        </section>

        <section id="data-types">
          <h2>Data Types</h2>
          <p>
            The Artemis protocols use the following data types:
            <ul>
              <li>byte</li>
              <li>short (2 bytes)</li>
              <li>int (4 bytes)</li>
              <li>float (4 bytes)</li>
              <li>bit field (variable length)</li>
              <li>boolean (variable length)</li>
              <li>string (variable length)</li>
            </ul>
          </p>
          <p>
            These types can be combined in <em>structs</em> or <em>arrays</em>.
          </p>
          <section id="endianness">
            <h3>Endianness</h3>
            <p>
              All multi-byte data types are represented in
              <a href="https://en.wikipedia.org/wiki/Endianness" target="_new">little-endian</a>
              order (least-significant byte first). Numeric literals in this documentation, in order
              to follow the existing convention for many programming languages, are prefixed with
              <code>0x</code> and are written in big-endian order. For example, the four bytes that
              begin every Artemis packet are <code>ef be ad de</code>; represented as an int, this
              is <code>0xdeadbeef</code>.
            </p>
          </section>
          <section id="numeric-format">
            <h3>Numeric Format</h3>
            <p>
              Integral types (byte, short, int) use
              <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_new">two's complement</a>
              representation in binary. Floats use
              <a href="https://en.wikipedia.org/wiki/IEEE_floating_point" target="_new">IEEE 754 binary32 format</a>.
            </p>
          </section>
          <section id="bit-field-format">
            <h3>Bit Field Format</h3>
            <p>
              A bit field is one or more bytes that encodes a series of on/off switches. Each bit in
              the binary representation of each byte in the field represents a single switch. In
              this documentation, an individual bit in a bit field is represented with the notation
              &ldquo;bit <em>{byte}</em>.<em>{bit}</em>&rdquo;, where the <em>byte</em> and
              <em>bit</em> values are one-based, and the bits are counted in little-endian order
              (least-significant bits first).
            </p>
            <p>
              The most common use for a bit field is to declare which properties are defined
              in a struct. Each bit represents a property, with <code>1</code> indicating that the
              property is defined, and <code>0</code> meaning it is undefined. When sending updates
              to clients, the Artemis server typically omits properties which are unchanged since
              the last update; these properties will be undefined when the updated struct is
              transmitted.
            </p>
            <h4>Example</h4>
            <p>
              A single-byte bit field with the value <code>0x42</code> is represented in
              little-endian binary as <code>01000010</code>. Bits 1.2 and 1.7 are on, the rest are
              off.
            </p>
          </section>
          <section id="boolean-format">
            <h3>Boolean Format</h3>
            <p>
              Boolean values are simply expressed as an integer value 0 (false) or 1 (true). This
              value may be transmitted as a byte, short or int. In this documentation, a field is
              considered to be a boolean if all the following conditions are met:
            </p>
            <ol>
              <li>There are only two possible values.</li>
              <li>The values are exact opposites (true/false, on/off, etc.).</li>
              <li>They are represented by 0 and 1.</li>
              <li>It does not seem that other values could be added in the future. (If other values
                are deemed possible, the field's value is documented as an
                <a href="#enums">enumeration</a> instead.)</li>
            </ol>
          </section>
          <section id="string-format">
            <h3>String Format</h3>
            <p>
              Strings are represented by an int giving the length of the string in characters,
              followed by the string itself encoded in
              <a href="https://en.wikipedia.org/wiki/UTF-16" target="_new">UTF-16LE</a>.
              Because UTF-16 encodes each character in two bytes, the number of bytes to read after
              the length value is the number of characters times two. Strings are null-terminated
              (<code>0x0000</code>), and the length value includes the null. Under normal
              circumstances, the null character would be the last two bytes read for the string; if
              the null character occurs earlier, the remaining bytes are meaningless and should be
              discarded. Zero-length strings are not allowed. For brevity's sake, all values denoted
              as strings in this documentation are presumed to follow this format, and the string
              length value will not be documented separately.
            </p>
            <h4>Example</h4>
            <p>
              To interpret the byte sequence <code>04 00 00 00 48 00 69 00 21 00 00 00</code> as a
              string, you would first read an int (4 bytes) to learn the string's length:
              <code>04 00 00 00</code>, which is four characters. In UTF-16, this is eight bytes, so
              you'd then read eight bytes from the stream: <code>48 00 69 00 21 00 00 00</code>.
              Decoded, this is <code>H</code>, <code>i</code>, <code>!</code> and <code>null</code>,
              which terminates the string. Thus, the byte sequence represents the string "Hi!"
            </p>
            <h3>Array Format</h3>
            <p>
              Arrays consist of an ordered list of values. These values can be primitive types,
              strings, structs or other arrays. There are two basic kinds of arrays: delimited and
              undelimited. Delimited arrays are typically used in circumstances where the exact
              number of elements in the array is not known in advance. Elements are transmitted one
              after the other until a particular byte is encountered instead of more data. With
              undelimited arrays, either the exact size or exact number of elements is known, so no
              delimiter is needed. Instead, parsing continues until the desired number of elements
              is read, or all the bytes that make up the array are consumed.
            </p>
            <h3>Structs</h3>
            <p>
              Structs are complex types composed of primitive types, strings, arrays or other
              structs. These properties are always specified in a particular defined order, so that
              it is unneccessary to declare each property's name when reading or writing a struct.
              There are two type of structs: static structs and bit field structs. A static struct
              always transmits all of its properties. A bit field struct has a bit field as its
              first property. Each bit in the field corresponds to one of the remaining properties
              in the struct. If a bit is <code>1</code>, that property is defined; if it's
              <code>0</code>, it is undefined and is omitted from the struct. When the Artemis
              server sends game object updates, it will typically use bit field structs to only send
              properties which have changed and leave the rest undefined; this reduces the payload
              size for update packets.
            </p>
          </section>
        </section>

        <section id="enums">
          <h2>Enumerations</h2>
          <p>
            When <em>Artemis</em> needs to refer to an item from a static list (enumeration), it
            will use a predefined numeric value to represent it. This section documents these
            enumerations.
          </p>
          <section id="enum-alert-status">
            <h3>Alert Status</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>normal</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>red alert</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-audio-command">
            <h3>Audio Command</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>play</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>dismiss</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-audio-mode">
            <h3>Audio Mode</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td><em>unused</em></td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>playing</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>incoming</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-beam-frequency">
            <h3>Beam Frequency</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>A</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>B</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>C</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>D</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>E</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-comm-message">
            <h3>COMM Message</h3>
            <p>
              To players:
            </p>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>Yes.</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>No.</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>Help!</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>Greetings.</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>Die!</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td>We're leaving the sector. Bye.</td>
                </tr>
                <tr>
                  <td><code>0x06</code></td>
                  <td>Ready to go.</td>
                </tr>
                <tr>
                  <td><code>0x07</code></td>
                  <td>Please follow us.</td>
                </tr>
                <tr>
                  <td><code>0x08</code></td>
                  <td>We'll follow you.</td>
                </tr>
                <tr>
                  <td><code>0x09</code></td>
                  <td>We're badly damaged.</td>
                </tr>
                <tr>
                  <td><code>0x0a</code></td>
                  <td>We're headed back to the station.</td>
                </tr>
                <tr>
                  <td><code>0x0b</code></td>
                  <td>Sorry, please disregard.</td>
                </tr>
              </tbody>
            </table>
            <p>
              To enemies:
            </p>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>Will you surrender?</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>Taunt #1 (varies by race)</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>Taunt #2 (varies by race)</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>Taunt #3 (varies by race)</td>
                </tr>
              </tbody>
            </table>
            <p>
              To stations:
            </p>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>Stand by for docking.</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>Please report status.</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>Build homing missiles</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>Build nukes</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>Build mines</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td>Build EMPs</td>
                </tr>
                <tr>
                  <td><code>0x06</code></td>
                  <td>Build PShocks</td>
                </tr>
              </tbody>
            </table>
            <p>
              To other ships:
            </p>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>Report status</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>Turn to heading 0</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>Turn to heading 90</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>Turn to heading 180</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>Turn to heading 270</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td>Turn 10 degrees to port</td>
                </tr>
                <tr>
                  <td><code>0x06</code></td>
                  <td>Turn 10 degrees to starboard</td>
                </tr>
                <tr>
                  <td><code>0x07</code></td>
                  <td>Attack nearest enemy</td>
                </tr>
                <tr>
                  <td><code>0x08</code></td>
                  <td>Proceed to your destination</td>
                </tr>
                <tr>
                  <td><code>0x09</code></td>
                  <td>Go defend [target]</td>
                </tr>
                <tr>
                  <td><code>0x0a</code></td>
                  <td><em>unused</em></td>
                </tr>
                <tr>
                  <td><code>0x0b</code></td>
                  <td><em>unused</em></td>
                </tr>
                <tr>
                  <td><code>0x0c</code></td>
                  <td><em>unused</em></td>
                </tr>
                <tr>
                  <td><code>0x0d</code></td>
                  <td><em>unused</em></td>
                </tr>
                <tr>
                  <td><code>0x0e</code></td>
                  <td><em>unused</em></td>
                </tr>
                <tr>
                  <td><code>0x0f</code></td>
                  <td>Turn 25 degrees to port</td>
                </tr>
                <tr>
                  <td><code>0x10</code></td>
                  <td>Turn 25 degrees to starboard</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-comm-target-type">
            <h3>COMM Target Type</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>player</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>enemy</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>station</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>other</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-connection-type">
            <h3>Connection Type</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td><em>unused</em></td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>server</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>client</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-console-status">
            <h3>Console Status</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>available</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>yours</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>unavailable</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-console-type">
            <h3>Console Type</h3>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>&lt; v2.1</th>
                  <th>&ge; v2.1, &lt; v2.3</th>
                  <th>&ge; v2.3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>main screen</td>
                  <td>main screen</td>
                  <td>main screen</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>helm</td>
                  <td>helm</td>
                  <td>helm</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>weapons</td>
                  <td>weapons</td>
                  <td>weapons</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>engineering</td>
                  <td>engineering</td>
                  <td>engineering</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>science</td>
                  <td>science</td>
                  <td>science</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td>communications</td>
                  <td>communications</td>
                  <td>communications</td>
                </tr>
                <tr>
                  <td><code>0x06</code></td>
                  <td>observer</td>
                  <td>data</td>
                  <td>fighter</td>
                </tr>
                <tr>
                  <td><code>0x07</code></td>
                  <td>captain's map</td>
                  <td>observer</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td><code>0x08</code></td>
                  <td>game master</td>
                  <td>captain's map</td>
                  <td>observer</td>
                </tr>
                <tr>
                  <td><code>0x09</code></td>
                  <td><em>unused</em></td>
                  <td>game master</td>
                  <td>captain's map</td>
                </tr>
                <tr>
                  <td><code>0x0a</code></td>
                  <td><em>unused</em></td>
                  <td><em>unused</em></td>
                  <td>game master</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-creature-type">
            <h3>Creature Type</h3>
            <p>
              New as of v2.1.5.
            </p>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>classic monster</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>whale</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>shark</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>dragon</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>piranha</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td>charybdis</td>
                </tr>
                <tr>
                  <td><code>0x06</code></td>
                  <td>insect</td>
                </tr>
                <tr>
                  <td><code>0x07</code></td>
                  <td>wreck</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-drive-type">
            <h3>Drive Type</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>warp</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>jump</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-special-ability">
            <h3>Special Ability</h3>
            <p>
              Note: Special abilities can stack, in which case the values are ORed together. For
              example, cloak and warp would be <code>0x14</code>. A ship with no special abilities
              would have a special ability value of <code>0x00</code>.

              Special abilities used to be called <emph>elite
              abilities</emph> in earlier versions of the game.
            </p>
            <table>
              <thead>
                <tr><th>Flag</th><th>Internal name</th><th>Alt name</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td><code>0x0001</code></td><td>ELITE_INVIS_TO_MAIN_SCREEN</td><td>Stealth</td><td>Cannot be seen on main screen</td></tr>
                <tr><td><code>0x0002</code></td><td>ELITE_INVIS_TO_TACTICAL   </td><td>LowVis</td><td>Cannot be seen on tactical map</td></tr>
                <tr><td><code>0x0004</code></td><td>ELITE_CLOAKING            </td><td>Cloak</td><td>Can become completely invisible</td></tr>
                <tr><td><code>0x0008</code></td><td>ELITE_HET                 </td><td>HET</td><td>?</td></tr>
                <tr><td><code>0x0010</code></td><td>ELITE_WARP                </td><td>Warp</td><td>?</td></tr>
                <tr><td><code>0x0020</code></td><td>ELITE_TELEPORT            </td><td>Teleport</td><td>?</td></tr>
                <tr><td><code>0x0040</code></td><td>ELITE_TRACTOR_BEAM        </td><td>Tractor</td><td>Can lock player ships in, preventing them from escaping</td></tr>
                <tr><td><code>0x0080</code></td><td>ELITE_DRONE_LAUNCHER      </td><td>Drones</td><td>Can launch drones</td></tr>
                <tr><td><code>0x0100</code></td><td>ELITE_ANTI_MINE_BEAMS     </td><td>Anti-mines</td><td>?</td></tr>
                <tr><td><code>0x0200</code></td><td>ELITE_ANTI_TORP_BEAMS     </td><td>Anti-torp</td><td>?</td></tr>
                <tr><td><code>0x0400</code></td><td>ELITE_ANTI_SHIELD         </td><td>Shield-drain</td><td>Can drain the energy of player ship shields</td></tr>
                <tr><td><code>0x0800</code></td><td>ELITE_?                   </td><td>ShldVamp</td><td>Can steal energy from player ship shields (unconfirmed)</td></tr>
              </tbody>
            </table>
          </section>
          <section id="enum-game-type">
            <h3>Game Type</h3>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>&lt; v2.1</th>
                  <th>&ge; v2.1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>siege</td>
                  <td>siege</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>single front</td>
                  <td>single front</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>double front</td>
                  <td>double front</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td><em>unused</em></td>
                  <td>deep strike</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td><em>unused</em></td>
                  <td>peacetime</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td><em>unused</em></td>
                  <td>border war</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-main-screen-view">
            <h3>Main Screen View</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>forward</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>port</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>starboard</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>aft</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>tactical</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td>long range</td>
                </tr>
                <tr>
                  <td><code>0x06</code></td>
                  <td>status</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-object-type">
            <h3>Object Type</h3>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>&lt; v2.1.5</th>
                  <th>&ge; v2.1.5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td><em>end of ObjectUpdatePacket</em></td>
                  <td><em>end of ObjectUpdatePacket</em></td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>player ship</td>
                  <td>player ship</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>weapons console</td>
                  <td>weapons console</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>engineering console</td>
                  <td>engineering console</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>NPC ship (enemy or civilian)</td>
                  <td>player ship upgrades</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td>base</td>
                  <td>NPC ship (enemy or civilian)</td>
                </tr>
                <tr>
                  <td><code>0x06</code></td>
                  <td>mine</td>
                  <td>base</td>
                </tr>
                <tr>
                  <td><code>0x07</code></td>
                  <td>anomaly</td>
                  <td>mine</td>
                </tr>
                <tr>
                  <td><code>0x08</code></td>
                  <td><em>unused</em></td>
                  <td>anomaly</td>
                </tr>
                <tr>
                  <td><code>0x09</code></td>
                  <td>nebula</td>
                  <td><em>unused</em></td>
                </tr>
                <tr>
                  <td><code>0x0a</code></td>
                  <td>torpedo</td>
                  <td>nebula</td>
                </tr>
                <tr>
                  <td><code>0x0b</code></td>
                  <td>black hole</td>
                  <td>torpedo</td>
                </tr>
                <tr>
                  <td><code>0x0c</code></td>
                  <td>asteroid</td>
                  <td>black hole</td>
                </tr>
                <tr>
                  <td><code>0x0d</code></td>
                  <td>generic mesh</td>
                  <td>asteroid</td>
                </tr>
                <tr>
                  <td><code>0x0e</code></td>
                  <td>creature</td>
                  <td>generic mesh</td>
                </tr>
                <tr>
                  <td><code>0x0f</code></td>
                  <td>whale</td>
                  <td>creature</td>
                </tr>
                <tr>
                  <td><code>0x10</code></td>
                  <td>drone</td>
                  <td>drone</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-ordnance-type">
            <h3>Ordnance Type</h3>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>&lt; v2.1.5</th>
                  <th>&ge; v2.1.5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>homing missile</td>
                  <td>homing missile</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>nuke</td>
                  <td>nuke</td>
                </tr>
                </tr>
                  <td><code>0x02</code></td>
                  <td>mine</td>
                  <td>mine</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>EMP</td>
                  <td>EMP</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td><em>unused</em></td>
                  <td>plasma shock</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-perspective">
            <h3>Perspective</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>first person</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>third person</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-ship-system">
            <h3>Ship System</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>beams</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>torpedoes</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>sensors</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>maneuvering</td>
                </tr>
                <tr>
                  <td><code>0x04</code></td>
                  <td>impulse</td>
                </tr>
                <tr>
                  <td><code>0x05</code></td>
                  <td>warp/jump drive</td>
                </tr>
                <tr>
                  <td><code>0x06</code></td>
                  <td>fore shields</td>
                </tr>
                <tr>
                  <td><code>0x07</code></td>
                  <td>aft shields</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="enum-targeting-mode">
            <h3>Targeting Mode</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>auto</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>manual</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="enum-tube-status">
            <h3>Tube Status</h3>
            <table>
              <tbody>
                <tr>
                  <td><code>0x00</code></td>
                  <td>unloaded</td>
                </tr>
                <tr>
                  <td><code>0x01</code></td>
                  <td>loaded</td>
                </tr>
                <tr>
                  <td><code>0x02</code></td>
                  <td>loading</td>
                </tr>
                <tr>
                  <td><code>0x03</code></td>
                  <td>unloading</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="enum-upgrade">
            <h3>Upgrades</h3>
            <p>
              New as of v2.1.5. Upgrades marked with (*) can be
              activated by client consoles, meaning they can occur in
              the ActivateUpgrade packet.
            </p>
            <table>
              <thead>
                <tr><th>Index</th><th>In-game name</th><th>Type</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td><code>0x00</code>*</td><td>Infusion P-Coils             </td><td>Engine Boost       </td><td>5 Minute 10% Impulse and Warp Speed Boost</td></tr>
                <tr><td><code>0x01</code>*</td><td>Hydrogen Ram                 </td><td>Maneuver Boost     </td><td>5 Minute 10% Turn Speed Boost</td></tr>
                <tr><td><code>0x02</code>*</td><td>Tauron Focusers              </td><td>Weapons Boost      </td><td>5 Minute 10% Beam and Reload Speed Boost</td></tr>
                <tr><td><code>0x03</code>*</td><td>Carapaction Coils            </td><td>Shield Boost       </td><td>5 Minute 10% Shield Recharge Boost</td></tr>
                <tr><td><code>0x04</code>*</td><td>Polyphasic Capacitors        </td><td>Energy Boost       </td><td>5 Minute 10% Energy Recharge Boost</td></tr>
                <tr><td><code>0x05</code>*</td><td>Coolant Reserves             </td><td>Heat Reduction     </td><td>5 Minute 10% Faster Heat Reduction</td></tr>
                <tr><td><code>0x06</code>*</td><td>Lateral Array                </td><td>Scanner Boost      </td><td>5 Minute Target Scan Triple Speed</td></tr>
                <tr><td><code>0x07</code>*</td><td>ECM Starpulse                </td><td>Jammer Boost       </td><td>5 Minute Enemy Cannot Lock</td></tr>
                <tr><td><code>0x08</code>*</td><td>Double Agent                 </td><td>Auto-Surrender     </td><td>Can force one ship to auto surrender</td></tr>
                <tr><td><code>0x09</code></td><td>Wartime Production           </td><td>Prod Boost         </td><td>10% (min +1) boost to all starting base munitions</td></tr>
                <tr><td><code>0x0a</code></td><td>Infusion P-Coils PERM        </td><td>Engine Refit       </td><td>Permanent 10% Impulse and Warp Speed Boost</td></tr>
                <tr><td><code>0x0b</code></td><td>Protonic Verniers            </td><td>Maneuver Refit     </td><td>Permanent 10% Turn Speed Boost</td></tr>
                <tr><td><code>0x0c</code></td><td>Tauron Focusers PERM         </td><td>Weapons Refit      </td><td>Permanent 10% Reload and Beam Speed</td></tr>
                <tr><td><code>0x0d</code></td><td>Regenerative Pau-Grids       </td><td>Shield Refit       </td><td>Permanent 10% Shield Recharge Speed</td></tr>
                <tr><td><code>0x0e</code></td><td>Veteran DamCon Teams         </td><td>Faster DamCon      </td><td>Damcon teams move/repair 10% faster</td></tr>
                <tr><td><code>0x0f</code></td><td>Cetrocite Heatsinks          </td><td>Heatsink Refit     </td><td>Heat builds 10% slower</td></tr>
                <tr><td><code>0x10</code></td><td>Tachyon Scanners             </td><td>Scanner Refit      </td><td>Permanent 10% Scan Speed Boost</td></tr>
                <tr><td><code>0x11</code></td><td>Gridscan Overload            </td><td>Sensor Refit       </td><td>Permanent 10% Range Booster</td></tr>
                <tr><td><code>0x12</code></td><td>Override Authorization       </td><td>Improved Prod      </td><td>All bases produce 10% faster</td></tr>
                <tr><td><code>0x13</code></td><td>Resupply Imperatives         </td><td>Mission Enhance    </td><td>10% More missions</td></tr>
                <tr><td><code>0x14</code></td><td>Patrol Group                 </td><td>Allied Combat      </td><td>Additional TSN Escort Ship in-sector</td></tr>
                <tr><td><code>0x15</code></td><td>Fast Supply                  </td><td>Allied Supply      </td><td>Additional TSN Cargo Ship in-sector</td></tr>
                <tr><td><code>0x16</code></td><td>Vanguard Refit               </td><td>Improved Console   </td><td>Perm 10% Boost to Impulse, Warp, and Turn Speed</td></tr>
                <tr><td><code>0x17</code></td><td>Vanguard Refit               </td><td>Improved Console   </td><td>Perm 10% Boost to Beam, Shield and Reload Speeds</td></tr>
                <tr><td><code>0x18</code></td><td>Vanguard Refit               </td><td>Improved Console   </td><td>Perm 10% Boost to Scan speed and Sensor Range</td></tr>
                <tr><td><code>0x19</code></td><td>Vanguard Refit               </td><td>Improved Console   </td><td>Perm 10% Boost to Station production</td></tr>
                <tr><td><code>0x1a</code></td><td>Vanguard Refit               </td><td>Improved Console   </td><td>Perm 10% Boost to all Engineering Systems</td></tr>
                <tr><td><code>0x1b</code></td><td>Vanguard Refit               </td><td>Systems Overhaul   </td><td>Permanent 10% Boost to all Ship Systems</td></tr>
              </tbody>
            </table>

            <h3>Game world upgrades</h3>
            <p>
              New as of v2.1.5.
            </p>
            <table>
              <thead>
                <tr><th>Index</th><th>Internal name</th><th>Known names</th></tr>
              </thead>
              <tbody>
                <tr><td><code>0x00</code></td><td>ITEMTYPE_ENERGY</td>        <td>Anomaly / HiDens Power Cell</td></tr>
                <tr><td><code>0x01</code></td><td>ITEMTYPE_RESTORE_DAMCON</td><td>Vigoranium Nodule</td></tr>
                <tr><td><code>0x02</code></td><td>ITEMTYPE_HEAT_BUFF</td>     <td>Cetrocite Crystal</td></tr>
                <tr><td><code>0x03</code></td><td>ITEMTYPE_SCAN_BUFF</td>     <td>Lateral Array</td></tr>
                <tr><td><code>0x04</code></td><td>ITEMTYPE_WEAP_BUFF</td>     <td>Tauron Focusers</td></tr>
                <tr><td><code>0x05</code></td><td>ITEMTYPE_SPEED_BUFF</td>    <td>Infusion P-Coils</td></tr>
                <tr><td><code>0x06</code></td><td>ITEMTYPE_SHIELD_BUFF</td>   <td>Carapaction Coils</td></tr>
                <tr><td><code>0x07</code></td><td>ITEMTYPE_COMM_BUFF</td>     <td>Secret code case / Double agent</td></tr>
              </tbody>
            </table>
          </section>
        </section>

        <section id="packet-structure">
          <h2>Packet Structure</h2>
          <p>
            Artemis packets have two parts: the preamble and the payload.
          </p>
          <section id="packet-structure-preamble">
            <h3>Preamble</h3>
            <p>
              The preamble consists of metadata that describes what kind packet it is and how long
              it is. The information in the preamble is needed in order to interpret the payload.
              The preamble consists of the following parts:
            </p>
            <h4>Header (int)</h4>
            <p>
              The first four bytes constitute a header which identifies the packet as an Artemis
              packet. This value should always be <code>0xdeadbeef</code>.
            </p>
            <h4>Packet length (int)</h4>
            <p>
              Gives the total length of the packet in bytes, including both the preamble and the
              payload.
            </p>
            <h4>Origin (int)</h4>
            <p>
              A <a href="#enum-connection-type">connection type</a> enumeration value indicating
              whether the packet originates from the server or the client.
            </p>
            <h4>Padding (int)</h4>
            <p>
              This value is always <code>0x00</code>.
            </p>
            <h4>Remaining bytes (int)</h4>
            <p>
              The number of bytes following this field in the packet. This is the length of the
              packet type field (4) plus the length of the payload, or the length of the entire
              packet minus 20.
            </p>
            <h4>Packet type (int)</h4>
            <p>
              This value identifies the type of this packet. Refer to the
              <a href="#packet-types">packet types table</a> to find the values that correspond to
              the various packet types. Note that many packets also have a subtype value; for those
              packets, the subtype will be the first value transmitted in the payload.
            </p>
          </section>
          <section id="packet-structure-payload">
            <h3>Payload</h3>
            <p>
              The remaining bytes in the packet after the preamble constitute the payload. Its
              format will vary depending on the packet type. Refer to the next section to see what
              packet types exist and the formats of their payloads.
            </p>
          </section>
        </section>

        <section id="packet-types">
          <h2>Packet Types</h2>
          <p>
            The table below lists the known packet types. The type names are derived from the class
            names for the packets in
            <a href="https://github.com/rjwut/ArtClientLib" target="_new">ArtClientLib</a>.
          </p>
          <table id="packet-table" class="table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Origin</th>
                <th>Type</th>
                <th>Subtype(s)</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>

          <section id="pkg-hypothetical">
            <h3>Hypothetical</h3>

            <section id="__hypothetical_0x0351a5ac_0x03">
              <h3>__client_hypothetical__1</h3>
              <div class="pkt-props">Type: <code>0x0351a5ac</code>:<code>0x03</code> [from <span>client</span>]</div>
              <p>
                This packet has not been observed, but has been
                hypothesized to exist based on the numeric range of
                the subtype. Nothing concrete is known about this
                packet type at this point, or even if it exists.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x03</code>.
                  </p>
                </dd>
              </dl>
            </section>


            <section id="__hypothetical__0x69cc01d9_0x01">
              <h3>__client_hypothetical__3</h3>
              <div class="pkt-props">Type: <code>0x69cc01d9</code>:<code>0x01</code> [from <span>client</span>]</div>
              <p>
                This packet has not been observed, but has been
                hypothesized to exist based on the numeric range of
                the subtype. Nothing concrete is known about this
                packet type at this point, or even if it exists.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x01</code>.
                  </p>
                </dd>
              </dl>
            </section>

            <section id="__hypothetical__0xf754c8fe_0x01">
              <h3>__server_hypothetical__1</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x01</code> [from <span>server</span>]</div>
              <p>
                This packet has not been observed, but has been
                hypothesized to exist based on the numeric range of
                the subtype. Nothing concrete is known about this
                packet type at this point, or even if it exists.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x01</code>.
                  </p>
                </dd>
              </dl>
            </section>

            <section id="__hypothetical__0xf754c8fe_0x02">
              <h3>__server_hypothetical__2</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x02</code> [from <span>server</span>]</div>
              <p>
                This packet has not been observed, but has been
                hypothesized to exist based on the numeric range of
                the subtype. Nothing concrete is known about this
                packet type at this point, or even if it exists.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x02</code>.
                  </p>
                </dd>
              </dl>
            </section>

            <section id="__hypothetical__0xf754c8fe_0x0e">
              <h3>__server_hypothetical__2</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x0e</code> [from <span>server</span>]</div>
              <p>
                This packet has not been observed, but has been
                hypothesized to exist based on the numeric range of
                the subtype. Nothing concrete is known about this
                packet type at this point, or even if it exists.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0e</code>.
                  </p>
                </dd>
              </dl>
            </section>

            <section id="__hypothetical__0xf754c8fe_0x16">
              <h3>__server_hypothetical__3</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x16</code> [from <span>server</span>]</div>
              <p>
                This packet has not been observed, but has been
                hypothesized to exist based on the numeric range of
                the subtype. Nothing concrete is known about this
                packet type at this point, or even if it exists.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x16</code>.
                  </p>
                </dd>
              </dl>
            </section>

          </section>

          <section id="pkg-unknown">
            <h3>Unknown</h3>

            <section id="__unknown__0x4c821d3c_0x05">
              <h3>__client_unknown__1</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x05</code> [from <span>client</span>]</div>
              <p>
                This packet type has been observed, and is known to
                exist, but its function is as of yet completely
                unknown. All examples so far have seen was sent from
                Helm to Server.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x05</code>.
                  </p>
                </dd>
              </dl>
            </section>

            <section id="__unknown__0x4c821d3c_0x06">
              <h3>__client_unknown__2</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x06</code> [from <span>client</span>]</div>
              <p>
                This packet type has been observed, and is known to
                exist, but its function is as of yet completely
                unknown. All examples so far have seen was sent from
                Helm to Server.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x06</code>.
                  </p>
                </dd>
                <dt>Observed payload</dt>
                <dd>
                  So far, only 0x00000000 (4 bytes) has been observed.
                </dd>
              </dl>
            </section>


            <section id="__unknown__0x4c821d3c_0x17">
              <h3>__client_unknown__3</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x17</code> [from <span>client</span>]</div>
              <p>
                This packet type has been observed, and is known to
                exist, but its function is as of yet completely
                unknown.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x17</code>.
                  </p>
                </dd>
                <dt>Observed payload</dt>
                <dd>
                  So far, no payload apart from subtype has been observed.
                </dd>
              </dl>
            </section>


            <section id="__unknown__0xf5821226">
              <h3>__server_unknown__1</h3>
              <div class="pkt-props">Type: <code>0xf5821226</code> [from <span>server</span>]</div>
              <p>
                This packet is seen regularly from the server, in
                every game type. It is speculated to be a heartbeat
                packet, that simply serves to ensure the clients that
                the server is still alive and well-connected.
              </p>
              <h4>Payload</h4>
              <p>This packet has no payload.</p>
            </section>

            <section id="__unknown__0xf754c8fe_0x07">
              <h3>__server_unknown__2</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x07</code> [from <span>server</span>]</div>
              <p>
                This packet type has been observed, and its payload
                structure is believed to be understood. However, its
                function has not determined with certainty.

                Contains three floats which seem to correspond to map
                coordinates of ships with special abilities. Could
                relate to cloak/decloak graphical effects.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x07</code>.
                  </p>
                </dd>
                <dt>x_coordinate (float)</dt>
                <dd>
                  Unknown
                </dd>
                <dt>y_coordinate (float)</dt>
                <dd>
                  Unknown
                </dd>
                <dt>z_coordinate (float)</dt>
                <dd>
                  Unknown
                </dd>
              </dl>
            </section>

            <section id="__unknown__0xf754c8fe_0x08">
              <h3>__server_unknown__3</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x08</code> [from <span>server</span>]</div>
              <p>
                This packet type has been observed, and its payload
                structure is believed to be understood. However, its
                function is as of yet completely unknown. Has been
                hypothesized as having some relation
                to <a href="#soundeffectpacket">SoundEffectPacket</a>.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x08</code>.
                  </p>
                </dd>
                <dt>Unknown (float)</dt>
                <dd>
                  Values of 0.0, 50.0 and 100.0 has been observed. It
                  is unclear if other values have been observed.
                </dd>
              </dl>
            </section>

            <section id="__unknown__0xf754c8fe_0x13">
              <h3>__server_unknown__4</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x13</code> [from <span>server</span>]</div>
              <p>
                This packet type has been observed, and its payload
                structure is believed to be understood. However, its
                function is as of yet completely unknown.

                Seems to happen immediately before DestroyObject(Mine,
                objID) or DestroyObject(Torpedo, objID).

                Speculated to have some relation to
                detonations.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x13</code>.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  Only the value 7 has been observed so far. Unknown
                  function or significance.
                </dd>
                <dt>object_id (int)</dt>
                <dd>
                  In the observed packets, the object ids correspond
                  to a mixture of torpedos and mines, destroyed in the
                  very next packet.
                </dd>
              </dl>
            </section>

          </section>

          <section id="pkt-a">
            <h3>A</h3>
            <section id="allshipsettingspacket">
              <h3>AllShipSettingsPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x0f</code> [from <span>server</span>]</div>
              <p>
                Provides the list of available player ships.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0f</code> for this packet type.
                  </p>
                </dd>
                <dt>Ships (array)</dt>
                <dd>
                  <p>
                    A list of the eight available player ships. Each ship is structured as follows:
                  </p>
                  <dl>
                    <dt><a href="#enum-drive-type">Drive type</a> (int, enumeration)</dt>
                    <dd>Whether the ship has warp or jump drive</dd>
                    <dt>Ship type (int)</dt>
                    <dd>ID from vesselData.xml</dd>
                    <dt>Accent Color (int) (v2.4 or later)</dt>
                    <dt>Unknown (int) (v2.0 or later)</dt>
                    <dd>Only <code>0x01</code> has been observed thus far.</dd>
                    <dt>Name (string)</dt>
                    <dd>The name of the ship</dd>
                  </dl>
                </dd>
              </dl>
            </section>
            <section id="audiocommandpacket">
              <h3>AudioCommandPacket</h3>
              <div class="pkt-props">Type: <code>0x6aadc57f</code> [from <span>client</span>]</div>
              <p>
                Instructs the server to play or dismiss an audio message.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Audio ID (int)</dt>
                <dd>
                  <p>
                    The ID for the audio message. This is given by the
                    <a href="#incomingaudiopacket">IncomingAudioPacket</a>.
                  </p>
                </dd>
                <dt><a href="#enum-audio-command">Audio command</a> (int, enumeration)</dt>
                <dd>
                  The desired action to perform.
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-b">
            <h3>B</h3>
            <section id="beamfiredpacket">
              <h3>BeamFiredPacket</h3>
              <div class="pkt-props">Type: <code>0xb83fd2c4</code> [from <span>server</span>]</div>
              <p>
                Notifies the client that a beam weapon has been fired.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>ID (int)</dt>
                <dd>
                  <p>
                    A unique identifier for this beam. Each time a beam is fired, it gets its own ID.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    In single-bridge games, this value has been observed as 0 for beams fired by
                    enemies and 1 for beams fired by the player's ship.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Values of 1200 (for beams from the player's ship) and 100 (for enemy beams) have
                    been observed.
                  </p>
                </dd>
                <dt>Beam port index (int)</dt>
                <dd>
                  All ships that can fire beams have beam ports. These are defined in
                  <code>vesselData.xml</code> as <code>&lt;beam_port&gt;</code> entries. This value
                  gives the index of the beam port on the originating ship that fired the beam. This
                  value is zero-based; thus, vessels that only have one beam port will always give 0
                  for this value.
                </dd>
                <dt><a href="#enum-object-type">Origin object type</a> (int)</dt>
                <dd>
                  <p>
                    Indicates the type of object that fired the beam.
                  </p>
                </dd>
                <dt><a href="#enum-object-type">Target object type</a> (int)</dt>
                <dd>
                  <p>
                    Indicates the type of object that was struck by the beam.
                  </p>
                </dd>
                <dt>Unknown (int) (v2.3 or later)</dt>
                <dd>
                  <p>
                    This field is present in v2.3 and later.  A value of 0 has been observed.
                  </p>
                </dd>
                <dt>Origin object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the object that fired the beam.
                  </p>
                </dd>
                <dt>Target object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the object that was struck by the beam.
                  </p>
                </dd>
                <dt>Target X coordinate (float)</dt>
                <dd>
                  <p>
                    The X coordinate (relative to the center of the target) of the impact point. This
                    is used to determine the endpoint for the beam. A negative value means an impact
                    on the target's starboard (right) side; a positive value means an impact on the
                    target's port (left) side.
                  </p>
                </dd>
                <dt>Target Y coordinate (float)</dt>
                <dd>
                  <p>
                    The Y coordinate (relative to the center of the target) of the impact point. This
                    is used to determine the endpoint for the beam. A negative value means an impact
                    on the target's ventral (bottom) side; a positive value means an impact on the
                    target's dorsal (top) side.
                  </p>
                </dd>
                <dt>Target Z coordinate (float)</dt>
                <dd>
                  <p>
                    The Z coordinate (relative to the center of the target) of the impact point. This
                    is used to determine the endpoint for the beam. A negative value means an impact
                    on the target's aft (rear) side; a positive value means an impact on the target's
                    forward (front) side.
                  </p>
                </dd>
                <dt><a href="#enum-targeting-mode">Targeting mode</a> (float)</dt>
                <dd>
                  <p>
                    Indicates whether the beam was auto- or manually-fired.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-c">
            <h3>C</h3>
            <section id="captainselectpacket">
              <h3>CaptainSelectPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x11</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that a new target has been selected on the captain's map.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x11</code>.
                  </p>
                </dd>
                <dt>Target ID (int)</dt>
                <dd>
                  <p>
                    The object ID for the new target, or 1 if the target has been cleared.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="climbdivepacket">
              <h3>ClimbDivePacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x1b</code> [from <span>client</span>]</div>
              <p>
                Causes the ship to climb or dive. This differs from
                <a href="#helmsetpitchpacket">HelmSetPitchPacket</a> in that it indicates a
                direction in which to change the ship's current pitch, rather than setting a precise
                pitch value. The circumstances in which one type of packet might be sent versus the
                other are not fully understood at this time.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x1b</code>.
                  </p>
                </dd>
                <dt>Direction (int)</dt>
                <dd>
                  <p>
                    Indicates the change in the ship's direction: <code>0x00000001</code> (1) for
                    down, <code>0xffffffff</code> (-1) for up. For example, if the ship is diving when
                    the instruction to go up is received, the ship will level out. If a second up
                    command is received, the ship will start climbing.
                  </p>
                </dd>
              </dl>
            </section>

            <section id="activateupgradepacket">
              <h3>ActivateUpgradePacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x1c</code> [from <span>client</span>]</div>
              <p>
                This packet is sent whenever a client wishes to activate a ship upgrade from the "upgrades" menu.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x1c</code>.
                  </p>
                </dd>
                <dt>Target (upgrade type, enum32)</dt>
                <dd>
                  <p>
                    The upgrades that can be activated seem to be
                    the ones between <code>0x00</code>
                    (InfusionPCoils) and <code>0x08</code>
                    (DoubleAgent / Secret Code Case), both inclusive.
                  </p>
                </dd>
              </dl>
            </section>

            <section id="commsincomingpacket">
              <h3>CommsIncomingPacket</h3>
              <div class="pkt-props">Type: <code>0xd672c35f</code> [from <span>server</span>]</div>
              <p>
                  Contains a single incoming text message to display at the COMMS station.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Channel (int)</dt>
                <dd>
                  <p>
                    Indicates the channel on which the message was received. Values range from
                    <code>0x00</code> to <code>0x08</code>. In the stock client, this affects the
                    message's background color; the lower the channel number, the more red the
                    background color. While this would seem to indicate priority, in practice, the
                    channel number doesn't seem to correlate with message importance. Below is a
                    list of message types received on each channel; note that this list may be
                    incomplete and custom scenarios may send messages on any channel:
                  </p>
                  <table>
                    <tbody>
                      <tr>
                        <td><code>0x00</code></td>
                        <td>Enemy taunts</td>
                      </tr>
                      <tr>
                        <td><code>0x01</code></td>
                        <td>?</td>
                      </tr>
                      <tr>
                        <td><code>0x02</code></td>
                        <td>?</td>
                      </tr>
                      <tr>
                        <td><code>0x03</code></td>
                        <td>Base destroyed</td>
                      </tr>
                      <tr>
                        <td><code>0x04</code></td>
                        <td>Base is under attack, docking complete, ship refuses orders</td>
                      </tr>
                      <tr>
                        <td><code>0x05</code></td>
                        <td>Base acknowledges build order or docking request</td>
                      </tr>
                      <tr>
                        <td><code>0x06</code></td>
                        <td>Ship accepts orders, base status response, ordnance built notice, GM message</td>
                      </tr>
                      <tr>
                        <td><code>0x07</code></td>
                        <td>Mission notification, mission transfer complete</td>
                      </tr>
                      <tr>
                        <td><code>0x08</code></td>
                        <td>Messages sent from player ships</td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
                <dt>Sender (string)</dt>
                <dd>
                  <p>
                    The name of the entity that sent the message. Note that this does not necessarily
                    correspond to the exact name of that entity. This field appears to always at least
                    start with the name of the originating ship or station in non-scripted missions,
                    but may have additional text afterward (e.g. &ldquo;DS3 TSN Base&rdquo;). Custom
                    missions could have any string in this field.
                  </p>
                </dd>
                <dt>Message (string)</dt>
                <dd>
                  <p>
                    The contents of the incoming message. The carat symbol (<code>^</code>) in the
                    message indicates a line break.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="commsoutgoingpacket">
              <h3>CommsOutgoingPacket</h3>
              <div class="pkt-props">Type: <code>0x574c4c4b</code> [from <span>client</span>]</div>
              <p>
                Sends a COMMs message to the server.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt><a href="#enum-comm-target-type">COMM target type</a> (int)</dt>
                <dd>
                  <p>
                    The type of target for the message.
                  </p>
                </dd>
                <dt>Recipient ID (int)</dt>
                <dd>
                  <p>
                    ID of the object that is to receive the message.
                  </p>
                </dd>
                <dt><a href="#enum-comm-message">Message</a> (int)</dt>
                <dd>
                  <p>
                    A value that indicates what message is to be transmitted. The interpretation of
                    the value depends on the COMM target type.
                  </p>
                </dd>
                <dt>Target object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the object to be targeted by the message. Currently, the only message
                    that accepts a target is &ldquo;Other ship: Go defend [target].&rdquo; This value
                    will be ignored if the message cannot support a target, but must still be
                    provided; the value <code>0x00730078</code> has been observed in this case, but it
                    is unknown why.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Possibly reserved for a second message argument. It is always ignored but must
                    still be provided. The value of <code>0x004f005e</code> has been observed for this
                    field, but it is unknown why.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="consolestatuspacket">
              <h3>ConsoleStatusPacket</h3>
              <div class="pkt-props">Type: <code>0x19c6e2d4</code> [from <span>server</span>]</div>
              <p>
                Indicates that a change has occurred in the availability status of one or more bridge
                consoles.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Ship number (int)</dt>
                <dd>
                  <p>
                    The number of the ship whose consoles are being described. Before v2.3.0, this
                    value was one-based, so by default the ship identified by <code>0x01</code> was
                    <em>Artemis</em>. As of v2.3.0 it is now zero-based.
                  </p>
                </dd>
                <dt><a href="#enum-console-status">Console status</a> (array)</dt>
                <dd>
                  <p>
                    This array contains one element for each possible console, with the availability
                    status of each console represented with a single byte. The consoles are iterated
                    in the order given by the <a href="#enum-console-type">console type</a>
                    enumeration. Note that the helm, weapons, engineering, and game master stations
                    permit only one client to claim them. Once they've been claimed, their status will
                    be reported as unavailable to other clients. All other stations will remain
                    available to other clients when claimed.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="converttorpedopacket">
              <h3>ConvertTorpedoPacket</h3>
              <div class="pkt-props">Type: <code>0x69cc01d9</code>:<code>0x03</code> [from <span>client</span>]</div>
              <p>
                Converts a homing torpedo to energy or vice versa.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x03</code>.
                  </p>
                </dd>
                <dt>Direction (float)</dt>
                <dd>
                  <p>
                    Indicates whether we are converting a torpedo to energy (0.0,
                    <code>0x00000000</code>) or energy to a torpedo (1.0, <code>0x3f800000</code>).
                    Why this is expressed as a float when a byte seems like it would be more
                    appropriate is unknown.
                  </p>
                </dd>
                <dt>Unknown (12 bytes)</dt>
              </dl>
            </section>
          </section>
          <section id="pkt-d">
            <h3>D</h3>
            <section id="destroyobjectpacket">
              <h3>DestroyObjectPacket</h3>
              <div class="pkt-props">Type: <code>0xcc5a3e30</code> [from <span>server</span>]</div>
              <p>
                Notifies the client that an object has been removed from play.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt><a href="#enum-object-type">Object type</a> (byte)</dt>
                <dd>
                  <p>
                    Indicates the type of object being destroyed.
                  </p>
                </dd>
                <dt>Object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the object being destroyed.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="destroyobjectpacket2">
              <h3>DestroyObjectPacket2</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x00</code> [from <span>server</span>]</div>
              <p>
                In earlier versions, sent when the simulation starts, but this appears to have been discontinued as of
                v2.1.1. Starting in v2.3, this packet indicates that an object was destroyed.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x00</code>.
                  </p>
                </dd>
                <dt><a href="#enum-object-type">Object type</a> (byte, enumeration)</dt>
                <dd>
                  <p>
                    The type of object destroyed.
                  </p>
                </dd>
                <dt>Object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the object destroyed.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="difficultypacket">
              <h3>DifficultyPacket</h3>
              <div class="pkt-props">Type: <code>0x3de66711</code> [from <span>server</span>]</div>
              <p>
                Informs clients of the difficulty level when starting or connecting to a game.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Difficulty (int)</dt>
                <dd>
                  <p>
                    The difficulty level (a value from 1 to 11).
                  </p>
                </dd>
                <dt><a href="#enum-game-type">Game type</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    A value indicating the type of game. This applies only to solo and co-op games;
                    the field is present but its value is undefined for PvP and scripted games.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="dmxmessagepacket">
              <h3>DmxMessagePacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x10</code> [from <span>server</span>]</div>
              <p>
                Sends DMX messages. This packet is only sent to main screen consoles for ships other
                than the first.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x10</code>.
                  </p>
                </dd>
                <dt>Name (string)</dt>
                <dd>
                  <p>
                    The DMX flag name.
                  </p>
                </dd>
                <dt>State (boolean, 4 bytes)</dt>
                <dd>
                  <p>
                    The DMX flag's current state.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-e">
            <h3>E</h3>
            <section id="engautodamconupdatepacket">
              <h3>EngAutoDamconUpdatePacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x0b</code> [from <span>server</span>]</div>
              <p>
                Informs the client of changes to DAMCON team autonomy status. Triggered by the
                &ldquo;Autonomous&rdquo; button in the engineering console.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0b</code>.
                  </p>
                </dd>
                <dt>DAMCON autonomy (boolean, 4 bytes)</dt>
                <dd>
                  <p>
                    Whether DAMCON teams are directed autonomously or not.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="enggridupdatepacket">
              <h3>EngGridUpdatePacket</h3>
              <div class="pkt-props">Type: <code>0x077e9f3c</code> [from <span>server</span>]</div>
              <p>
                Updates damage to the various system grids on the ship and DAMCON team locations and
                status.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Reqested</dt>
                <dd>
                  <p>
                    This field is <code>0</code> on normal engineering
                    update from the server, but will be set
                    to <code>1</code> when in response to
                    the <a href="#requestenggridupdate">RequestEngGridUpdate</a>
                    packet.
                  </p>
                </dd>
                <dt>System grid status (array)</dt>
                <dd>
                  <p>
                    This array contains a list of system nodes, terminated with <code>0xff</code>.
                    Each system node contains the following fields:
                  </p>
                  <dl>
                    <dt>X coordinate (byte)</dt>
                    <dd>
                      <p>
                        The X coordinate of the node relative to the ship's center.
                      </p>
                    </dd>
                    <dt>Y coordinate (byte)</dt>
                    <dd>
                      <p>
                        The Y coordinate of the node relative to the ship's center.
                      </p>
                    </dd>
                    <dt>Z coordinate (byte)</dt>
                    <dd>
                      <p>
                        The Z coordinate of the node relative to the ship's center.
                      </p>
                    </dd>
                    <dt>Damage (float)</dt>
                    <dd>
                      <p>
                        The current damage level for this node. An undamaged node has a value of 0.0;
                        any higher value indicates damage. (Is there an upper limit to this value?)
                      </p>
                    </dd>
                  </dl>
                </dd>
                <dt>DAMCON team status (array)</dt>
                <dd>
                  <p>
                    This contains a list of DAMCON teams, terminated with <code>0xfe</code>. Each
                    DAMCON team contains the following fields:
                  </p>
                  <dl>
                    <dt>Team ID (byte)</dt>
                    <dd>
                      <p>
                        An ID assigned to this team. For some reason known only to Thom, this value
                        always has <code>0x0a</code> added to it.
                      </p>
                    </dd>
                    <dt>Goal X coordinate (int)</dt>
                    <dd>
                      <p>
                        The X coordinate of the node to which this team is currently moving. If the
                        team does not want to move elsewhere, this will be the same as their current
                        X coordinate.
                      </p>
                    </dd>
                    <dt>Current X coordinate (int)</dt>
                    <dd>
                      <p>
                        The X coordinate of the team's current node. This value does not change while
                        the team in in transit; it is only updated when they arrive at a new node.
                      </p>
                    </dd>
                    <dt>Goal Y coordinate (int)</dt>
                    <dd>
                      <p>
                        The Y coordinate of the node to which this team is currently moving. If the
                        team does not want to move elsewhere, this will be the same as their current
                        Y coordinate.
                      </p>
                    </dd>
                    <dt>Current Y coordinate (int)</dt>
                    <dd>
                      <p>
                        The Y coordinate of the team's current node. This value does not change while
                        the team in in transit; it is only updated when they arrive at a new node.
                      </p>
                    </dd>
                    <dt>Goal Z coordinate (int)</dt>
                    <dd>
                      <p>
                        The Z coordinate of the node to which this team is currently moving. If the
                        team does not want to move elsewhere, this will be the same as their current
                        Z coordinate.
                      </p>
                    </dd>
                    <dt>Current Z coordinate (int)</dt>
                    <dd>
                      <p>
                        The Z coordinate of the team's current node. This value does not change while
                        the team in in transit; it is only updated when they arrive at a new node.
                      </p>
                    </dd>
                    <dt>Progress (float)</dt>
                    <dd>
                      <p>
                        A value between 0.0 and 1.0 that expresses how close the team is in their
                        progress towards the goal node. The value starts at 1.0 as the team begins
                        moving towards the goal node, and gradually decreases until it reaches 0.0
                        upon their arriving at the goal.
                      </p>
                    </dd>
                    <dt>Number of team members (int)</dt>
                    <dd>
                      <p>
                        The number of people on this DAMCON team.
                      </p>
                    </dd>
                  </dl>
                </dd>
              </dl>
            </section>
            <section id="engsenddamconpacket">
              <h3>EngSendDamconPacket</h3>
              <div class="pkt-props">Type: <code>0x69cc01d9</code>:<code>0x04</code> [from <span>client</span>]</div>
              <p>
                Directs a DAMCON team to go to a particular grid location on the ship.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x04</code>.
                  </p>
                </dd>
                <dt>Team number (int)</dt>
                <dd>
                  <p>
                    The number assigned to the team (0 to 2 inclusive).
                  </p>
                </dd>
                <dt>X coordinate (int)</dt>
                <dd>
                  <p>
                    The X coordinate of the grid location that is the team's destination.
                  </p>
                </dd>
                <dt>Y coordinate (int)</dt>
                <dd>
                  <p>
                    The Y coordinate of the grid location that is the team's destination.
                  </p>
                </dd>
                <dt>Z coordinate (int)</dt>
                <dd>
                  <p>
                    The Z coordinate of the grid location that is the team's destination.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="engsetautodamconpacket">
              <h3>EngSetAutoDamconPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x0c</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that DAMCON team autonomy has been togged on/off.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0c</code>.
                  </p>
                </dd>
                <dt>Autonomous (int, boolean)</dt>
                <dd>
                  <p>
                    Indicates whether DAMCON team autonomy is on or off.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="engsetcoolantpacket">
              <h3>EngSetCoolantPacket</h3>
              <div class="pkt-props">Type: <code>0x69cc01d9</code>:<code>0x00</code> [from <span>client</span>]</div>
              <p>
                Sets the amount of coolant to be allocated to a system.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x00</code>.
                  </p>
                </dd>
                <dt><a href="#enum-ship-system">Ship system</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    The system whose coolant level is being adjusted.
                  </p>
                </dd>
                <dt>Value (int)</dt>
                <dd>
                  <p>
                    The number of coolant units to allocate to the system (0 to 8 inclusive).
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Only observed value is 0.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Only observed value is 0.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="engsetenergypacket">
              <h3>EngSetEnergyPacket</h3>
              <div class="pkt-props">Type: <code>0x0351a5ac</code>:<code>0x04</code> [from <span>client</span>]</div>
              <p>
                Sets the amount of energy to be allocated to a system.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x04</code>.
                  </p>
                </dd>
                <dt>Value (float)</dt>
                <dd>
                  <p>
                    The amount of energy to allocate to the system. This value can range from 0.0 to
                    1.0 inclusive, which in the stock UI corresponds to 0% to 300%. Therefore, the
                    default energy allocation of 100% would be represented as 0.333....
                  </p>
                </dd>
                <dt><a href="#enum-ship-system">Ship system</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    The system whose coolant level is being adjusted.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-f">
            <h3>F</h3>
            <section id="fighterbaystatuspacket">
              <h3>FighterBayStatusPacket</h3>
              <div class="pkt-props">Type: <code>0x9ad1f23b</code> [from <span>server</span>]</div>
              <p>
                Updates the client of the current status of the ship's fighter bays.
              </p>
              <h4>Payload</h4>
              <p>
                The payload consists of an array of structs, each one describing a single fighter, and
                terminated with <code>0x00000000</code>. The struct's properties are as follows:
              </p>
              <dl>
                <dt>Object ID (int)</dt>
                <dt>Fighter name (string)</dt>
                <dt>Fighter class name (string)</dt>
                <dt>Refit time (int)</dt>
                <dd>
                  <p>
                    Number of seconds of refit time remaining before fighter is ready to launch.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="fighterlaunchedpacket">
              <h3>FighterLaunchedPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x17</code> [from <span>server</span>]</div>
              <p>
                Notifies the client that a fighter was just launched.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x17</code>.
                  </p>
                </dd>
                <dt>Object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the fighter, as shown in
                    <a href="#fighterbaystatuspacket">FighterBayStatusPacket</a>.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="fighterlaunchpacket">
              <h3>FighterLaunchPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x1d</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that a fighter is being launched. The server will send back a
                <a href="#fighterlaunchedpacket">FighterLaunchedPacket</a> in response.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x1d</code>.
                  </p>
                </dd>
                <dt>Object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the fighter, as shown in
                    <a href="#fighterbaystatuspacket">FighterBayStatusPacket</a>.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="firebeampacket">
              <h3>FireBeamPacket</h3>
              <div class="pkt-props">Type: <code>0xc2bee72e</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that the weapons officer wants to manually fire beam weapons.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Target object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the ship or entity at which to fire.
                  </p>
                </dd>
                <dt>X coordinate (float)</dt>
                <dd>
                  <p>
                    The X coordinate at which to fire, relative to the center of the target ship.
                  </p>
                </dd>
                <dt>Y coordinate (float)</dt>
                <dd>
                  <p>
                    The Y coordinate at which to fire, relative to the center of the target ship.
                  </p>
                </dd>
                <dt>Z coordinate (float)</dt>
                <dd>
                  <p>
                    The Z coordinate at which to fire, relative to the center of the target ship.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="firetubepacket">
              <h3>FireTubePacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x08</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that the weapons officer wants to fire whatever's loaded in a
                certain tube.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x08</code>.
                  </p>
                </dd>
                <dt>Tube index (index)</dt>
                <dd>
                  <p>
                    The index number of the tube to fire.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-g">
            <h3>G</h3>
            <section id="gamemasterbuttonclickpacket">
              <h3>GameMasterButtonClickPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x15</code> [from <span>client</span>]</div>
              <p>
                New as of v2.4.0. Sent by the client when the game master clicks on a button
                created by <a href="#gamemasterbuttonpacket">GameMasterButtonPacket</a>.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x15</code>.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Appears to always be <code>0x0d</code>.
                  </p>
                </dd>
                <dt>Hash (int)</dt>
                <dd>
                  <p>
                    A hash value identifying the button. It has been determined that this is a hash
                    of the button's label string, but it is currently unknown how this hash is
                    computed.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gamemasterbuttonpacket">
              <h3>GameMasterButtonPacket</h3>
              <div class="pkt-props">Type: <code>0x26faacb9</code>:<code>0x00</code>-<code>02</code> [from <span>server</span>]</div>
              <p>
                New as of v2.4.0. Sent by the server to indicate that a button should be added to
                or removed from the game master console.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Action (byte)</dt>
                <dd>
                  <p>
                    Indicates what action is desired:
                    <table>
                      <tbody>
                        <tr>
                          <td><code>0x00</code></td>
                          <td>
                            Create a button. Its position and size are up to the client.
                          </td>
                        </tr>
                        <tr>
                          <td><code>0x01</code></td>
                          <td>
                            Create a button with a specified position and size.
                          </td>
                        </tr>
                        <tr>
                          <td><code>0x02</code></td>
                          <td>
                            Remove a previously-created button.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                </dd>
                <dt>Label (string)</dt>
                <dd>
                  <p>
                    The button's label. This doubles as an identifier for the button and must
                    therefore be unique.
                  </p>
                </dd>
                <dt>width (int, subtype <code>0x02</code> only)</dt>
                <dd>
                  <p>
                    The width of the button to create.
                  </p>
                </dd>
                <dt>height (int, subtype <code>0x02</code> only)</dt>
                <dd>
                  <p>
                    The height of the button to create.
                  </p>
                </dd>
                <dt>x (int, subtype <code>0x02</code> only)</dt>
                <dd>
                  <p>
                    The X-coordinate of the button's location.
                  </p>
                </dd>
                <dt>y (int, subtype <code>0x02</code> only)</dt>
                <dd>
                  <p>
                    The Y-coordinate of the button's location.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gamemasterinstructionspacket">
              <h3>GameMasterInstructionsPacket</h3>
              <div class="pkt-props">Type: <code>0x809305a7</code>:<code>0x63</code> [from <span>server</span>]</div>
              <p>
                Sent by the server to the game master console to provide instructions to be displayed
                on request.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (byte)</dt>
                <dd>
                  <p>
                    Always <code>0x63</code>.
                  </p>
                </dd>
                <dt>Title (string)</dt>
                <dd>
                  <p>
                    A title to display above the instructions.
                  </p>
                </dd>
                <dt>Content (string)</dt>
                <dd>
                  <p>
                    The body content for the help screen.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gamemastermessagepacket">
              <h3>GameMasterMessagePacket</h3>
              <div class="pkt-props">Type: <code>0x809305a7</code> [from <span>client</span>]</div>
              <p>
                New as of v2.4.0. A packet sent by the game master console to the server which
                causes a message to be displayed on a client.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt><a href="#enum-console-type">Console type</a> (byte, enumeration)</dt>
                <dd>
                  <p>
                    If this value is <code>0x00</code>, the message is received by the
                    communications officer as a normal COMM message. Otherwise, it is sent as a
                    popup message at a particular console type. The console that receives the
                    message is determined by subtracting 1 from the value; the result then matches
                    the values for the console type enumeration.
                  </p>
                </dd>
                <dt>Sender (string)</dt>
                <dd>
                  <p>
                    The name of the message's sender. This can be any arbitrary string; it doesn't
                    have to match the name of an existing object.
                  </p>
                </dd>
                <dt>Message (string)</dt>
                <dd>
                  <p>
                    The message to send.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gamemasterselectlocationpacket">
              <h3>GameMasterSelectLocationPacket</h3>
              <div class="pkt-props">Type: <code>0x0351a5ac</code>:<code>0x06</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that a new location has been selected on the game master's map.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x06</code>.
                  </p>
                </dd>
                <dt>Z-coordinate (float)</dt>
                <dd>
                  <p>
                    The coordinate of the selected location on the Z axis.
                  </p>
                </dd>
                <dt>Unknown (4 bytes)</dt>
                <dd>
                  <p>
                    Seems to always be `0x00000000`.
                  </p>
                </dd>
                <dt>X-coordinate (float)</dt>
                <dd>
                  <p>
                    The coordinate of the selected location on the X axis.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gamemasterselectobjectpacket">
              <h3>GameMasterSelectObjectPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x12</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that a new target has been selected on the game master's map.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x12</code>.
                  </p>
                </dd>
                <dt>Target ID (int)</dt>
                <dd>
                  <p>
                    ID of the selected object.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gamemessagepacket">
              <h3>GameMessagePacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x0a</code> [from <span>server</span>]</div>
              <p>
                Contains a message to be displayed on the screen. The stock client displays the
                message in a &ldquo;popup&rdquo; box in the lower-right corner.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0a</code>.
                  </p>
                </dd>
                <dt>Message (string)</dt>
                <dd>
                  <p>
                    The message to display.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gameoverpacket">
              <h3>GameOverPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x06</code> [from <span>server</span>]</div>
              <p>
                Informs the client that the game is over. Transmitted when the &ldquo;End
                Game&rdquo; button on the statistics page is clicked.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x06</code>.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gameoverreasonpacket">
              <h3>GameOverReasonPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x14</code> [from <span>server</span>]</div>
              <p>
                Provides the reason why the game ended.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x14</code>.
                  </p>
                </dd>
                <dt>Reason (string array)</dt>
                <dd>
                  <p>
                    Text describing why the game ended. Each string is one line.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="gameoverstatspacket">
              <h3>GameOverStatsPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x15</code> [from <span>server</span>]</div>
              <p>
                Provides endgame statistics.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x15</code>.
                  </p>
                </dd>
                <dt>Column index (byte)</dt>
                <dd>
                  <p>
                    Stats are presented in vertical columns; each packet contains one column of
                    stats data. This fields is the index for this column of data. In practice,
                    there are only two possible values: 0 and 1.
                  </p>
                </dd>
                <dt>Statistics (array)</dt>
                <dd>
                  <p>
                    The remaining bytes in the packet are an array, where each element constitutes a
                    row in the stats column. Each element is prefaced with <code>0x00</code>, and
                    the last element is followed by <code>0xce</code>. Each element contains the
                    following fields:
                    <dl>
                      <dt>Value (int)</dt>
                      <dd>
                        <p>
                          The numeric value for this statistic.
                        </p>
                      </dd>
                      <dt>Label (string)</dt>
                      <dd>
                        <p>
                          The description for this statistic.
                        </p>
                      </dd>
                    </dl>
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-h">
            <h3>H</h3>
            <section id="helmjumppacket">
              <h3>HelmJumpPacket</h3>
              <div class="pkt-props">Type: <code>0x0351a5ac</code>:<code>0x05</code> [from <span>client</span>]</div>
              <p>
                Initiates a jump. Note that the stock client
                <a href="https://en.wikipedia.org/wiki/Big_red_button#Molly-guard" target="_new">&ldquo;molly-guards&rdquo;</a>
                jumps, asking for confirmation from helm. This packet isn't sent until helm confirms the jump.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x04</code>.
                  </p>
                </dd>
                <dt>Bearing (float)</dt>
                <dd>
                  <p>
                    The direction to jump, expressed as a value between 0.0 and 1.0 inclusive. To
                    compute this value, take the desired bearing in degrees and divide by 360.
                  </p>
                </dd>
                <dt>Distance (float)</dt>
                <dd>
                  <p>
                    The distance to jump, expressed as a value between 0.0 and 1.0 inclusive. To
                    compute this value, take the desired distance in &#x3BC;ls and divide by 50 (the
                    maximum jump distance).
                  </p>
                </dd>
              </dl>
            </section>
            <section id="helmrequestdockpacket">
              <h3>HelmRequestDockPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x07</code> [from <span>client</span>]</div>
              <p>
                Request docking with the nearest station, or, in the case of a fighter, with its mothership.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x07</code>.
                  </p>
                </dd>
                <dt>Unused (int)</dt>
                <dd>
                  <p>
                    Always <code>0x00</code>.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="helmsetimpulsepacket">
              <h3>HelmSetImpulsePacket</h3>
              <div class="pkt-props">Type: <code>0x0351a5ac</code>:<code>0x00</code> [from <span>client</span>]</div>
              <p>
                Sets the throttle for impulse engines.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x00</code>.
                  </p>
                </dd>
                <dt>Throttle (float)</dt>
                <dd>
                  <p>
                    Any value between 0.0 and 1.0 inclusive, where 0.0 is no throttle and 1.0 is
                    full throttle. Actual velocity will depend on the ship's maximum velocity and
                    the power allocated to impulse by engineering.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="helmsetpitchpacket">
              <h3>HelmSetPitchPacket</h3>
              <div class="pkt-props">Type: <code>0x0351a5ac</code>:<code>0x02</code> [from <span>client</span>]</div>
              <p>
                Sets the desired pitch for the player ship. This differs from
                <a href="#climbdivepacket">ClimbDivePacket</a> in that it sets a precise pitch value
                for the ship instead of just indicating a direction to change pitch. The
                circumstances in which one type of packet might be sent versus the other are not
                fully understood at this time.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x02</code>.
                  </p>
                </dd>
                <dt>Pitch (float)</dt>
                <dd>
                  <p>
                    Any value between -1.0 and 1.0 inclusive, where 0.0 is level, -1.0 is a hard
                    climb, and 1.0 is a hard dive.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="helmsetsteeringpacket">
              <h3>HelmSetSteeringPacket</h3>
              <div class="pkt-props">Type: <code>0x0351a5ac</code>:<code>0x01 </code> [from <span>client</span>]</div>
              <p>
                Sets the position of the ship's &ldquo;rudder&rdquo;, controlling its turn rate.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x01</code>.
                  </p>
                </dd>
                <dt>Rudder (float)</dt>
                <dd>
                  <p>
                    Any value between 0.0 and 1.0 inclusive, where 0.0 is hard to port (left), 0.5
                    is rudder amidships (straight), and 1.0 is a hard to starboard (right). Actual
                    turn rate will depend on the ship's maximum turn rate and the power allocated
                    to maneuvering by engineering.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="helmsetwarppacket">
              <h3>HelmSetWarpPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x00</code> [from <span>client</span>]</div>
              <p>
                Sets the ship's warp factor. Actual velocity will depend on the power allocated to
                warp by engineering.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x00</code>.
                  </p>
                </dd>
                <dt>Warp factor (int)</dt>
                <dd>
                  <p>
                    The desired warp factor, from 0 to 4 inclusive. Warp 0 means to drop out of warp
                    and move on impulse only.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="helmtogglereversepacket">
              <h3>HelmToggleReversePacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x18</code> [from <span>client</span>]</div>
              <p>
                Toggles the impulse engines between forward and reverse drive.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x18</code>.
                  </p>
                </dd>
                <dt>Unused (int)</dt>
                <dd>
                  <p>
                    Always <code>0x00</code>.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-i">
            <h3>I</h3>
            <section id="incomingaudiopacket">
              <h3>IncomingAudioPacket</h3>
              <div class="pkt-props">Type: <code>0xae88e058</code> [from <span>server</span>]</div>
              <p>
                Informs the client of incoming audio messages (used in custom scenarios).
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Audio ID (int)</dt>
                <dd>
                  <p>
                    The ID for this audio message.
                  </p>
                </dd>
                <dt><a href="#enum-audio-mode">Audio mode</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    &ldquo;Incoming&rdquo; means that the communications officer is to be notified
                    that an audio message is available, and offered the option to play or dismiss
                    it. &ldquo;Playing&rdquo; is given in response to the communications officer
                    giving the instruction to play the message, and notifies them that the message
                    is now being played by the main screen. In the stock client, this results in the
                    &ldquo;Play&rdquo; button changing to &ldquo;REPlay.&rdquo; (sic)
                  </p>
                </dd>
                <dt>Title (string, incoming mode only)</dt>
                <dd>
                  <p>
                    Title of the incoming message. This should be displayed to the COMMs officer.
                  </p>
                </dd>
                <dt>File (string, incoming mode only)</dt>
                <dd>
                  <p>
                    The filename for the audio clip. The client doesn't need to do anything with
                    this string; as the audio is played by the server.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="intelpacket">
              <h3>IntelPacket</h3>
              <div class="pkt-props">Type: <code>0xee665279</code> [from <span>server</span>]</div>
              <p>
                Contains intel about another ship. Intel on allied ships (and biomechs, for some
                reason) is sent right away. Intel for enemy ships is sent after undergoing a level 2
                scan. Theoretically, the intel should only need to be sent once, but the game
                re-transmits known intel periodically.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Object ID (int)</dt>
                <dd>
                  <p>
                    The ID of the ship to which this intel pertains.
                  </p>
                </dd>
                <dt>Unknown (byte)</dt>
                <dd>
                  <p>
                    A value of <code>0x03</code> has been observed in single-bridge scenarios.
                  </p>
                </dd>
                <dt>Intel (string)</dt>
                <dd>
                  <p>
                    The intel message about the ship. This is displayed to the science officer when
                    selecting this ship.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-j">
            <h3>J</h3>
            <section id="jumpstatusbeginpacket">
              <h3>JumpStatusBeginPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x0c</code> [from <span>server</span>]</div>
              <p>
                Notifies the client that a jump has started.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0c</code>.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="jumpstatusendpacket">
              <h3>JumpStatusEndPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x0d</code> [from <span>server</span>]</div>
              <p>
                Notifies the client that a jump has completed.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0d</code>.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-k">
            <h3>K</h3>
            <section id="keycapturetogglepacket">
              <h3>KeyCaptureTogglePacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x11</code> [from <span>server</span>]</div>
              <p>
                Sent to all consoles when key capture is enabled or disabled for any console.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x11</code>.
                  </p>
                </dd>
                <dt>Capture (boolean, 1 byte)</dt>
                <dd>
                  <p>
                    Whether this console should capture keystrokes or not. Note that because this
                    packet is sent to all consoles when the capture status of any console is
                    changed, a console may get a KeyCaptureTogglePacket telling it to do what it's
                    already doing; this is normal.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="keystrokepacket">
              <h3>KeystrokePacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x14</code> [from <span>client</span>]</div>
              <p>
                Informs the server that the player at this console pressed a particular key. This is
                used for custom mission scripts to allow keystrokes to trigger events. This packet
                should only be sent when keystroke capture is enabled for the console in question.
                Keystroke capture is always enabled for the game master console; other consoles
                require the script to
                <a href="#keycapturetogglepacket">activate keystroke capture</a>
                first.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (byte)</dt>
                <dd>
                  <p>
                    Always <code>0x14</code>.
                  </p>
                </dd>
                <dt>Key code (int)</dt>
                <dd>
                  <p>
                    The code identifying the key that was pressed. Microsoft has
                    <a href="http://msdn.microsoft.com/en-us/library/aa243025.aspx" target="_new">a good reference page</a>
                    that documents the key codes. Many languages have constants for these values.
                    For example: in Java, they are defined in the
                    <a href="http://docs.oracle.com/javase/6/docs/api/java/awt/event/KeyEvent.html" target="_new">KeyEvent class</a>.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-l">
            <h3>L</h3>
            <section id="loadtubepacket">
              <h3>LoadTubePacket</h3>
              <div class="pkt-props">Type: <code>0x69cc01d9</code>:<code>0x02</code> [from <span>client</span>]</div>
              <p>
                Loads a tube with a particular type of ordnance.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x02</code>.
                  </p>
                </dd>
                <dt>Tube index (int)</dt>
                <dd>
                  <p>
                    Indicates which tube is to be loaded.
                  </p>
                </dd>
                <dt><a href="#enum-ordnance-type">Ordnance type</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    The type of ordnance to load into the tube.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dt>Unknown (int)</dt>
              </dl>
            </section>
          </section>
          <section id="pkt-o">
            <h3>O</h3>
            <section id="objectupdatepacket">
              <h3>ObjectUpdatePacket</h3>
              <div class="pkt-props">Type: <code>0x80803df9</code> [from <span>server</span>]</div>
              <p>
                Updates the status of one or more objects in the game
                world. Each type of object update has its own encoding
                within this package, which makes this packet both the
                single most important server packet type, as well as
                the most complicated one to implement.
              </p>
              <p>
                Whereas other packet types that have many subtypes
                (for example, 0x4c821d3c) are documented for each
                subtype, that is not possible for this packet type,
                since it can contain more than one object update type
                in each packet.
              </p>
              <p>
                <em>Note</em>: The official Artemis server always
                seems to send objects of only one type in a single
                packet. If other types of objects need to be updated,
                they'll be transmitted in separate packets. However,
                keep in mind that the protocol does not require this,
                so it might change in the future.
              </p>
              <h4>Payload</h4>
              <p>
                The payload consists of an array of object update
                entries. Parsing continues in a loop until the end of
                the packet is reached, or the object type byte is
                <code>0x00</code>. Note that the array may be empty.
                Each entry in the array is structured as follows:
              </p>
              <dl>
                <dt><a href="#enum-object-type">Object type</a> (byte, enumeration)</dt>
                <dd>
                  <p>
                    The type of object represented by this entry. All objects in the same array will
                    be of the same type. If you get <code>0x00</code> for this field, there are no
                    more objects in the array.
                  </p>
                  <p>
                    In earlier protocol versions, this property was
                    transmitted as an int rather than a byte. At least
                    version 2.1.1 and onwards use the single byte
                    encoding, but it is not verified if version 2.1.1
                    is the first version to do so.
                  </p>
                </dd>
                <dt>Object ID (int)</dt>
                <dd>
                  <p>
                    A unique identifier assigned to this object.
                  </p>
                </dd>
                <dt>Bit field (variable length)</dt>
                <dd>
                  <p>
                    In order to minimize the amount of data that has to be transmitted, the server
                    typically only sends the properties that have changed instead of the entire
                    object every time. This bit field indicates which properties are included in the
                    update. Each bit represents a single property; if a bit is set to
                    <code>1</code>, that property is included. The length of the bit field depends
                    the number of properties the object has.
                  </p>
                </dd>
                <dt>Properties (variable length)</dt>
                <dd>
                  <p>
                    The rest of the entry consists of the updated values for the properties
                    indicated in the bit field.
                  </p>
                </dd>
              </dl>
              <p>
                For details about the properties of the various object types which may be included
                in the array entries, see the
                <a href="#object-properties">Object Properties</a> section.
              </p>
            </section>
          </section>
          <section id="pkt-p">
            <h3>P</h3>
            <section id="pausepacket">
              <h3>PausePacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x04</code> [from <span>server</span>]</div>
              <p>
                Sent by the server when the simulation is paused or resumed.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x04</code>.
                  </p>
                </dd>
                <dt>Paused (boolean, 4 bytes)</dt>
                <dd>
                  <p>
                    True if the simulation is paused; false otherwise.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="perspectivepacket">
              <h3>PerspectivePacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x12</code> [from <span>server</span>]</div>
              <p>
                Sent by the server when the main viewscreen perspective has changed.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x12</code>.
                  </p>
                </dd>
                <dt><a href="#enum-perspective">Perspective</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    The current main screen perspective.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="playershipdamagepacket">
              <h3>PlayerShipDamagePacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x05</code> [from <span>server</span>]</div>
              <p>
                Appears to be sent when the player ship is hit by enemy fire. Has been observed when
                fired upon by enemy beams. Information about this packet is still uncertain and the
                documentation for it should not be considered reliable at this time.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x05</code>.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Value of 1 observed.
                  </p>
                </dd>
                <dt>Unknown (float?)</dt>
                <dd>
                  <p>
                    Appears to have values of 1.0 or less for hits against shields, and values
                    greater than 1.0 and less than or equal to 2.0 for hits that pass through the
                    shields and strike the hull.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-r">
            <h3>R</h3>
            <section id="readypacket">
              <h3>ReadyPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x0f</code> [from <span>client</span>]</div>
              <p>
                Sent by the client when they click the &ldquo;Ready&rdquo; button to indicate that
                it is ready to join the game. The client must select at least one station before
                sending this packet. When a game ends, the stock client typically sends this packet
                again immediately, on the assumption that they will play again with the same
                console(s).
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0f</code>.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Always 0.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="requestenggridupdate">
              <h3>RequestEngGridUpdate</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x19</code> [from <span>client</span>]</div>
              <p>
                Sent from the engineering station, to request a full
                update for all values. This causes the server to send
                a full update, instead of the normal update type where
                only changes are sent.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x19</code>.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Always 0.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-s">
            <h3>S</h3>
            <section id="sciscanpacket">
              <h3>SciScanPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x13</code> [from <span>client</span>]</div>
              <p>
                Starts a science scan.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x13</code>.
                  </p>
                </dd>
                <dt>Target ID (int)</dt>
                <dd>
                  <p>
                    The object ID for the target to be scanned.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="sciselectpacket">
              <h3>SciSelectPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x10</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that a new target has been selected on the science map.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x10</code>.
                  </p>
                </dd>
                <dt>Target ID (int)</dt>
                <dd>
                  <p>
                    The object ID for the new target, or 1 if the target has been cleared.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="setbeamfreqpacket">
              <h3>SetBeamFreqPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x0b</code> [from <span>client</span>]</div>
              <p>
                Sets the beam frequency.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0b</code>.
                  </p>
                </dd>
                <dt><a href="#enum-beam-frequency">Beam frequency</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    The new beam frequency.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="setconsolepacket">
              <h3>SetConsolePacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x0e</code> [from <span>client</span>]</div>
              <p>
                Sets whether or not this client will use a particular console. A single client may
                use multiple consoles, and some consoles allow multiple clients to use them. Clients
                should send <a href="#setshippacket">SetShipPacket</a> before sending this one.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0e</code>.
                  </p>
                </dd>
                <dt><a href="#enum-console-type">Console type</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    The console whose status is being updated.
                  </p>
                </dd>
                <dt>Selected (boolean, 4 bytes)</dt>
                <dd>
                  <p>
                    True if this client is using the indicated console, false otherwise.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="setmainscreenpacket">
              <h3>SetMainScreenPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x01</code> [from <span>client</span>]</div>
              <p>
                Sets the view to display on the main screen.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x01</code>.
                  </p>
                </dd>
                <dt><a href="#enum-main-screen-view">Main screen view</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    The view to display on the main screen.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="setshippacket">
              <h3>SetShipPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x0d</code> [from <span>client</span>]</div>
              <p>
                Sets which ship the client will be on. This should be sent before
                <a href="#setconsolepacket">SetConsolePacket</a>.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0d</code>.
                  </p>
                </dd>
                <dt>Ship index (int)</dt>
                <dd>
                  <p>
                    The index of the desired ship; valid values are 0 through 7 inclusive.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="setshipsettingspacket">
              <h3>SetShipSettingsPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x16</code> [from <span>client</span>]</div>
              <p>
                Sets the name, ship type and drive type for the currently-selected ship.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x16</code>.
                  </p>
                </dd>
                <dt><a href="#enum-drive-type">Drive type</a> (int, enumeration)</dt>
                <dd>
                  <p>
                    The desired drive type.
                  </p>
                </dd>
                <dt>Vessel ID (int)</dt>
                <dd>
                  <p>
                    The ID of the desired type of vessel, as given in <code>vesselData.xml</code>.
                  </p>
                </dd>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    Always seems to be 1.
                  </p>
                </dd>
                <dt>Name (string)</dt>
                <dd>
                  <p>
                    The ship's name.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="setweaponstargetpacket">
              <h3>SetWeaponsTargetPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x02</code> [from <span>client</span>]</div>
              <p>
                Notifies the server that a new target has been selected on the weapons console.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x02</code>.
                  </p>
                </dd>
                <dt>Target ID (int)</dt>
                <dd>
                  <p>
                    The object ID for the new target, or 1 if the target has been cleared.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="skyboxpacket">
              <h3>SkyboxPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x09</code> [from <span>server</span>]</div>
              <p>
                Sent to change the displayed skybox image on the client. The server will send this
                packet at the start of a mission. The server will also send it any time a custom
                script instructs it to do so, but instead of sending the skybox index specified by
                the script, it will always send <code>0x0a</code> instead. This may be a bug in the
                Artemis server.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x09</code>.
                  </p>
                </dd>
                <dt>Skybox ID (int)</dt>
                <dd>
                  <p>
                    The number of the skybox image to load on the client. Under the Artemis install
                    directory is an "art" folder; this folder contains a bunch of subfolders whose
                    names start with "sb" followed by a two-digit decimal value. This value is the
                    skybox ID, and each folder contains image files for a single skybox. The stock
                    install of Artemis has skybox images for IDs 00 through 05 and 10 through 29. It
                    is presumed but not yet confirmed that other skybox IDs will work if a
                    corresponding folder is created and contains the appropriate files.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="soundeffectpacket">
              <h3>SoundEffectPacket</h3>
              <div class="pkt-props">Type: <code>0xf754c8fe</code>:<code>0x03</code> [from <span>server</span>]</div>
              <p>
                Causes the client to play a sound effect file.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x03</code>.
                  </p>
                </dd>
                <dt>Filename (string)</dt>
                <dd>
                  <p>
                    Path to the file to play the sound effect from, e.g "dat/enemy-explode.wav".
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-t">
            <h3>T</h3>
            <section id="toggleautobeamspacket">
              <h3>ToggleAutoBeamsPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x03</code> [from <span>client</span>]</div>
              <p>
                Informs the server that the auto beams setting has been toggled.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x03</code>.
                  </p>
                </dd>
                <dt>Unused (int)</dt>
                <dd>
                  <p>
                    Always 0.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="toggleperspectivepacket">
              <h3>TogglePerspectivePacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x1a</code> [from <span>client</span>]</div>
              <p>
                Toggles between first- and third-person perspective on the main screen.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x1a</code>.
                  </p>
                </dd>
                <dt>Unused (int)</dt>
                <dd>
                  <p>
                    Always 0.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="toggleredalertpacket">
              <h3>ToggleRedAlertPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x0a</code> [from <span>client</span>]</div>
              <p>
                Toggles the ship's red alert status.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x0a</code>.
                  </p>
                </dd>
                <dt>Unused (int)</dt>
                <dd>
                  <p>
                    Always 0.
                  </p>
                </dd>
              </dl>
            </section>
            <section id="toggleredalertpacket">
              <h3>ToggleShieldsPacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x04</code> [from <span>client</span>]</div>
              <p>
                Toggles the shields up or down.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x04</code>.
                  </p>
                </dd>
                <dt>Unused (int)</dt>
                <dd>
                  <p>
                    Always 0.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-u">
            <h3>U</h3>
            <section id="unloadtubepacket">
              <h3>UnloadTubePacket</h3>
              <div class="pkt-props">Type: <code>0x4c821d3c</code>:<code>0x09</code> [from <span>client</span>]</div>
              <p>
                Removes whatever ordnance is loaded in a tube.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Subtype (int)</dt>
                <dd>
                  <p>
                    Always <code>0x09</code>.
                  </p>
                </dd>
                <dt>Tube index (int)</dt>
                <dd>
                  <p>
                    Index of the tube to unload.
                  </p>
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-v">
            <h3>V</h3>
            <section id="versionpacket">
              <h3>VersionPacket</h3>
              <div class="pkt-props">Type: <code>0xe548e74a</code> [from <span>server</span>]</div>
              <p>
                Gives the server version number. This packet is sent immediately after the
                <a href="#welcomepacket">WelcomePacket</a>.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Unknown (int)</dt>
                <dd>
                  <p>
                    The value of this field can vary, even when connecting to the same version of
                    the server.
                  </p>
                </dd>
                <dt>Version (deprecated since v2.1) (float)</dt>
                <dd>
                  <p>
                    The version of Artemis running on the server. If the client doesn't support the
                    given version, it should disconnect. This field is deprecated as of v2.1; it is
                    still sent by the server, but client should ignore its value unless there are no
                    more bytes after it in the packet.
                  </p>
                </dd>
                <dt>Version (since v2.1) (3 ints)</dt>
                <dd>
                  These three int values constitute the major, minor and patch version numbers. For
                  example, v2.1.1 will transmit <code>02000000 01000000 01000000</code> (interpreted
                  2 1 1) for this field. If the client doesn't support the given version, it should
                  disconnect. The version specified in this field supersedes any specified in the
                  legacy version field.
                </dd>
              </dl>
            </section>
          </section>
          <section id="pkt-w">
            <h3>W</h3>
            <section id="welcomepacket">
              <h3>WelcomePacket</h3>
              <div class="pkt-props">Type: <code>0x6d04b3da</code> [from <span>server</span>]</div>
              <p>
                Indicates a successful connection to the Artemis server. This is the first packet
                sent upon connection.
              </p>
              <h4>Payload</h4>
              <dl>
                <dt>Welcome message (string)</dt>
                <dd>
                  <p>
                    Unlike all other strings in Artemis packets, this one is encoded in plain ASCII,
                    so each character is one byte, not two. Also, the given length for the string
                    does not include a terminating null. Currently, it says, "You have connected to
                    Thom Robertson's Artemis Bridge Simulator. Please connect with an authorized
                    game client."
                  </p>
                </dd>
              </dl>
            </section>
          </section>
        </section>

        <section id="object-properties">
          <h2>Object Properties</h2>
          <p>
            This section documents the bit fields and properties for each of the
            <a href="#enum-object-type">object types</a>.
            See
            <a href="#objectupdatepacket">ObjectUpdatePacket</a> for how these objects are updated
            by the Artemis server.
          </p>

          <section id="object-anomaly">
            <h3>Anomaly</h3>
            <p>
              New as of v.2.1.5. Previously, anomalies were handled by the
              <a href="#object-other">&ldquo;other&rdquo;</a> property structure.
            </p>
            <dl>
              <dt>Bit field (1 byte)</dt>
              <dt>X coordinate (byte 1.1, float)</dt>
              <dt>Y coordinate (byte 1.2, float)</dt>
              <dt>Z coordinate (byte 1.3, float)</dt>
              <dt><a href="#enum-upgrade">Upgrade</a> (byte 1.4, enum, int)</dt>
              <dd>
                <p>
                  Note that only the values <code>0x00</code> through <code>0x07</code> have been
                  observed, as the built-in mission types do not put other upgrade types in anomaly
                  pickups.
                </p>
              </dd>
            </dl>
          </section>

          <section id="object-base">
            <h3>Base</h3>
            <dl>
              <dt>Bit field (2 bytes)</dt>
              <dt>Name (bit 1.1, string)</dt>
              <dd>
                <p>
                  The name assigned to this base. In standard, non-custom scenarios, base names will
                  be unique, but there is no guarantee that the same will be true in custom
                  scenarios.
                </p>
              </dd>
              <dt>Shields (bit 1.2, float)</dt>
              <dd>
                <p>
                  The current strength of the base's shields.
                </p>
              </dd>
              <dt>Aft shields (unused) (bit 1.3, float)</dt>
              <dd>
                <p>
                  Bases only have one shield, but all shielded objects in Artemis are encoded with
                  fore and aft shields. This value is therefore meaningless and should be ignored.
                </p>
              </dd>
              <dt>Index (bit 1.4, int)</dt>
              <dd>
                <p>
                  The index of this base. Each base will have a unique index from 0 to (<em>number
                  of bases</em>-1). In a standard solo game, DS1 is 0, DS2 is 1, etc.
                </p>
              </dd>
              <dt>Vessel type (bit 1.5, int)</dt>
              <dd>
                <p>
                  The vessel type ID, as found in <code>vesselData.xml</code>.
                </p>
              </dd>
              <dt>X coordinate (bit 1.6, float)</dt>
              <dd>
                <p>
                  The base's location along the X-axis.
                </p>
              </dd>
              <dt>Y coordinate (bit 1.7, float)</dt>
              <dd>
                <p>
                  The base's location along the Y-axis.
                </p>
              </dd>
              <dt>Z coordinate (bit 1.8, float)</dt>
              <dd>
                <p>
                  The base's location along the Z-axis.
                </p>
              </dd>
            </dl>
            <dt>Unknown (bit 2.1, 4 bytes)</dt>
            <dt>Unknown (bit 2.2, 4 bytes)</dt>
            <dt>Unknown (bit 2.3, 4 bytes)</dt>
            <dt>Unknown (bit 2.4, 4 bytes)</dt>
            <dt>Unknown (bit 2.5, byte)</dt>
            <dt>Unknown (bit 2.6, byte)</dt>
          </section>

          <section id="object-creature">
            <h3>Creature</h3>
            <p>
              Note that wrecks are also considered creatures, for some reason. This structure is new
              as of v2.1.5. Previously, the only type of creature was the classic space monster,
              which was handled by the <a href="#object-other">&ldquo;other&rdquo;</a> property
              structure, and <a href="#object-whale">space whales</a> had their own structure.
            </p>
            <dl>
              <dt>Bit field (2 bytes)</dt>
              <dt>X (bit 1.1, float)</dt>
              <dd>
                <p>
                  The X coordinate of this creature.
                </p>
              </dd>
              <dt>Y (bit 1.2, float)</dt>
              <dd>
                <p>
                  The Y coordinate of this creature.
                </p>
              </dd>
              <dt>Z (bit 1.3, float)</dt>
              <dd>
                <p>
                  The Z coordinate of this creature.
                </p>
              </dd>
              <dt>Name (bit 1.4, string)</dt>
              <dd>
                <p>
                  The name of the creature.
                </p>
              </dd>
              <dt>Heading (bit 1.5, float)</dt>
              <dd>
                <p>
                  The creature's current heading.
                </p>
              </dd>
              <dt>Pitch (bit 1.6, float)</dt>
              <dd>
                <p>
                  The creature's current pitch.
                </p>
              </dd>
              <dt>Roll (bit 1.7, float)</dt>
              <dd>
                <p>
                  The creature's current roll.
                </p>
              </dd>
              <dt><a href="#enum-creature-type">Creature type</a> (bit 1.8, enum)</dt>
              <dd>
                <p>
                  The type of creature.
                </p>
              </dd>
              <dt>Unknown (bit 2.1, 4 bytes)</dt>
              <dt>Unknown (bit 2.2, 4 bytes)</dt>
              <dt>Unknown (bit 2.3, 4 bytes)</dt>
              <dt>Unknown (bit 2.4, 4 bytes)</dt>
              <dt>Unknown (bit 2.5, 4 bytes)</dt>
              <dt>Unknown (bit 2.6, 4 bytes)</dt>
            </dl>
          </section>

          <section id="object-drone">
            <h3>Drone</h3>
            <dl>
              <dt>Bit field (2 bytes)</dt>
              <dt>Unknown (bit 1.1, int)</dt>
              <dt>X coordinate (bit 1.2, float)</dt>
              <dt>Unknown (bit 1.3 float)</dt>
              <dd>
                <p>
                  Values observed range from approximately -0.01 to 53.7. Might be related to
                  pitch/yaw.
                </p>
              </dd>
              <dt>Z coordinate (bit 1.4, float)</dt>
              <dt>Unknown (bit 1.5 float)</dt>
              <dd>
                <p>
                  Perhaps related to pitch/yaw.
                </p>
              </dd>
              <dt>Y coordinate (bit 1.6, float)</dt>
              <dt>Heading (bit 1.7, float)</dt>
              <dt>Unknown (bit 1.8, int)</dt>
              <dt>Unknown (bit 2.1, float?, v2.1.5+)</dt>
              <dt>Unused? (bits 2.2-2.8)</dt>
            </dl>
          </section>

          <section id="object-engineering-console">
            <h3>Engineering Console</h3>
            <dl>
              <dt>Bit fields (3 bytes)</dt>
              <dd>
                <p>
                  Each byte of the field represents a category of values:
                </p>
                <ol>
                  <li>Heat levels</li>
                  <li>Energy allocations</li>
                  <li>Coolant allocations</li>
                </ol>
                <p>
                  The bits in each byte represent the ship systems, in the order specified in the
                  <a href="#enum-ship-system">ship system enumeration</a>. So for example, if the
                  first bit field is <code>0x01</code>, it means that this packet will contain a
                  single heat level value (beams).
                </p>
              </dd>
              <dt>Unknown (byte)</dt>
              <dd>
                <p>
                  This value always seems to be <code>0x00</code>. This might be a reserved bit
                  field byte for future engineering settings.
                </p>
              </dd>
              <dt>Heat levels (bits 1.1-1.8, float array)</dt>
              <dd>
                <p>
                  The heat level for each system, as a value between 0 (no heat) and 1 (maximum
                  heat). Reaching maximum heat for a system will cause an explosion, which will
                  damage a system node of that type and release some of the heat.
                </p>
              </dd>
              <dt>Energy allocations (bits 2.1-2.8, float array)</dt>
              <dd>
                <p>
                  The energy allocation for each system, as a value between 0 (no energy allocated)
                  and 1 (maximum possible energy allocation). In the UI, this is expressed as a
                  percentage between 0% and 300%, so the nominal allocation level (100%) is
                  represented by a value of 0.3333....
                </p>
              </dd>
              <dt>Coolant allocations (bits 3.1-3.8, byte array)</dt>
              <dd>
                <p>
                  The units of coolant allocated to each system.
                </p>
              </dd>
            </dl>
          </section>

          <section id="object-generic-mesh">
            <h3>Generic Mesh</h3>
            <p>
              These are arbitrary 3D objects to display in the game world. Players and enemies don't
              interact with these objects; they are just decoration.
            </p>
            <dl>
              <dt>Bit field (4 bytes)</dt>
              <dt>X coordinate (bit 1.1, float)</dt>
              <dd>
                <p>
                  The object's location on the X axis.
                </p>
              </dd>
              <dt>Y coordinate (bit 1.2, float)</dt>
              <dd>
                <p>
                  The object's location on the Y axis.
                </p>
              </dd>
              <dt>Z coordinate (bit 1.3, float)</dt>
              <dd>
                <p>
                  The object's location on the Z axis.
                </p>
              </dd>
              <dt>Unknown (bit 1.4, int)</dt>
              <dt>Unknown (bit 1.5, int)</dt>
              <dt>Unknown (bit 1.6, long)</dt>
              <dt>Unknown (bit 1.7, int)</dt>
              <dt>Unknown (bit 1.8, int)</dt>
              <dt>Unknown (bit 2.1, int)</dt>
              <dt>Unknown (bit 2.2, long)</dt>
              <dt>Name (bit 2.3, string)</dt>
              <dd>
                <p>
                  The name of this object.
                </p>
              </dd>
              <dt>Mesh file (bit 2.4, string)</dt>
              <dd>
                <p>
                  The name of the file containing the 3D mesh data.
                </p>
              </dd>
              <dt>Texture file (bit 2.4, string)</dt>
              <dd>
                <p>
                  The name of the file containing the texture to apply to the mesh. Note that this
                  uses the same bit as the mesh name, and that bit 2.5 is unused.
                </p>
              </dd>
              <dt>Unknown (bit 2.6, int)</dt>
              <dt>Unknown (bit 2.7, short)</dt>
              <dt>Unknown (bit 2.8, byte)</dt>
              <dt>Red color channel (bit 3.1, float)</dt>
              <dt>Green color channel (bit 3.2, float)</dt>
              <dt>Blue color channel (bit 3.3, float)</dt>
              <dt>Fore shields (bit 3.4, float)</dt>
              <dt>Aft shields (bit 3.5, float)</dt>
              <dt>Unknown (bit 3.6, int)</dt>
              <dt>Unknown (bit 3.7, int)</dt>
              <dt>Unknown (bit 3.8, int)</dt>
              <dt>Unknown (bit 4.1, int)</dt>
              <dt>Unknown (bit 4.2, int)</dt>
            </dl>
          </section>

          <section id="object-nebula">
            <h3>Nebula</h3>
            <dl>
              <dt>Bit field (1 bytes)</dt>
              <dt>X coordinate (bit 1.1, float)</dt>
              <dt>Y coordinate (bit 1.2, float)</dt>
              <dt>Z coordinate (bit 1.3, float)</dt>
              <dt>Red color channel (bit 1.4, float)</dt>
              <dt>Green color channel (bit 1.5, float)</dt>
              <dt>Blue color channel (bit 1.6, float)</dt>
              <dt>Unused? (bit 1.7, int)</dt>
              <dt>Unused? (bit 1.8, int)</dt>
            </dl>
          </section>

          <section id="object-npc-ship">
            <h3>NPC Ship</h3>
            <dl>
              <dt>Bit field (6 bytes)</dt>
              <dt>Name (bit 1.1, string)</dt>
              <dd>
                <p>
                  The ship's name.
                </p>
              </dd>
              <dt>Throttle (bit 1.2, float)</dt>
              <dd>
                <p>
                  Values range from 0.0 for all stop to 1.0 for full speed.
                </p>
              </dd>
              <dt>Rudder (bit 1.3, float)</dt>
              <dd>
                <p>
                  Values range from 0.0 for hard to port (left), to 1.0 for hard to starboard
                  (right).
                </p>
              </dd>
              <dt>Max impulse (bit 1.4, float)</dt>
              <dd>
                <p>
                  The ship's maximum possible speed at impulse.
                </p>
              </dd>
              <dt>Max turn rate (bit 1.5, float)</dt>
              <dd>
                <p>
                  The ship's maximum possible turning speed.
                </p>
              </dd>
              <dt>Enemy? (bit 1.6, boolean, 4 bytes)</dt>
              <dd>
                <p>
                  In single-bridge games, as well as multi-bridge co-op games, this value will be
                  true if the ship is hostile and false if it is friendly. In PvP and scripted
                  games, this field is always true, regardless of whether the NPC is hostile or
                  not.
                </p>
              </dd>
              <dt>Vessel type (bit 1.7, int)</dt>
              <dd>
                <p>
                  The ID corresponding to the <code>&lt;vessel&gt;</code> entry in
                  <code>vesselData.xml</code> that describes the vessel type for this ship.
                </p>
              </dd>
              <dt>X coordinate (bit 1.8, float)</dt>
              <dt>Y coordinate (bit 2.1, float)</dt>
              <dt>Z coordinate (bit 2.2, float)</dt>
              <dt>Pitch (bit 2.3, float)</dt>
              <dt>Roll (bit 2.4, float)</dt>
              <dt>Heading (bit 2.5, float)</dt>
              <dt>Velocity (bit 2.6, float)</dt>
              <dt>Surrendered (bit 2.7, boolean, 1 byte)</dt>
              <dd>
                <p>
                  True if this ship has surrendered; false otherwise.
                </p>
              </dd>
              <dt>Unknown (bit 2.8, short)</dt>
              <dt>Forward shields (bit 3.1, float)</dt>
              <dt>Forward shields max (bit 3.2, float)</dt>
              <dt>Aft shields (bit 3.3, float)</dt>
              <dt>Aft shields (bit 3.4, float)</dt>
              <dt>Unknown (bit 3.5, short)</dt>
              <dt>Fleet number (bit 3.6, byte)</dt>
              <dd>
                <p>
                  The number of the fleet to which this ship belongs. For custom missions, this is
                  specified in the mission file.
                </p>
              </dd>
              <dt><a href="#enum-special-ability">Special abilities</a> (bit 3.7, bit field, 4 bytes)</dt>
              <dd>
                <p>
                  The special abilites posessed by this ship. The value in this field is only
                  meaningful if the ship's faction has the &ldquo;special&rdquo; attribute, as
                  specified in <code>vesselData.xml</code>. Other ships should ignore this value
                  even if it is present, as they cannot have special abilities.
                </p>
              </dd>
              <dt>Active <a href="#enum-special-ability">speciall abilities</a> (bit 3.8, bit field, 4 bytes)</dt>
              <dd>
                <p>
                  The special abilites posessed by this ship that are currently in use. As with the
                  previous field, this field should be ignored if the ship can't have special
                  abilities, even if it is present.
                </p>
              </dd>
              <dt>Scan level? (bit 4.1, int)</dt>
              <dt>Side? (bit 4.2, int)</dt>
              <dd>
                <p>
                  This field appears to contain a different value for each side in the conflict.
                  Ships with the same value will presumably be friendly to each other.
                </p>
              </dd>
            </dl>
            <dt>Unknown (bit 4.3, int)</dt>
            <dt>Unknown (bit 4.4, byte)</dt>
            <dt>Unknown (bit 4.5, byte)</dt>
            <dt>Unknown (bit 4.6, byte)</dt>
            <dt>Unknown (bit 4.7, byte)</dt>
            <dt>Unknown (bit 4.8, float)</dt>
            <dd>
              <p>
                Values of 0.0 and -100000.0 have been observed.
              </p>
            </dd>
            <dt>Unknown (bit 5.1, int)</dt>
            <dt>Unknown (bit 5.2, int)</dt>
            <dt><a href="#enum-ship-system">Ship system</a> damage (bit 5.3 - 6.2, float array)</dt>
            <dd>
              <p>
                Damage to various ship systems, in the order specified in the enumeration. A
                system with a damage value of 0.0 is undamaged; a higher value (up to 1.0) means
                the system is damaged. In the stock client, damaged systems on NPC vessels can be
                seen via the science console. Barring further damage or actions by a custom
                script, damage values gradually decrease as the ship is repaired, until they
                return to 0.0.
              </p>
            </dd>
            <dt><a href="#enum-beam-frequency">Beam frequency</a> resistance (bit 6.3 - 6.7, float array)</dt>
            <dd>
              <p>
                The ship's resistance to the five beam frequencies. Higher values indicate greater
                resistance to beams tuned to the corresponding frequency.
              </p>
            </dd>
          </section>

          <section id="object-player-ship">
            <h3>Player Ship</h3>
            <dt>Bit field (6 bytes, 5 bytes before v2.3.0)</dt>
            <dt>Unknown (bit 1.1, int)</dt>
            <dd>
              <p>
                This might be the ship targeted by the weapons console.
              </p>
            </dd>
            <dt>Impulse (bit 1.2, float)</dt>
            <dd>
              <p>
                Current impulse power for this ship. Values range from 0.0 (all stop) to 1.0
                (full speed) inclusive.
              </p>
            </dd>
            <dt>Rudder (bit 1.3, float)</dt>
            <dd>
              <p>
                Values range from 0.0 to 1.0 inclusive, with 0.0 meaning hard to port (left),
                0.5 meaning rudder amidships (straight), and 1.0 meaning hard to starboard
                (right).
              </p>
            </dd>
            <dt>Top speed (bit 1.4, float)</dt>
            <dt>Turn rate (bit 1.5, float)</dt>
            <dt>Auto beams (bit 1.6, boolean, 1 byte)</dt>
            <dt>Warp factor (bit 1.7, byte)</dt>
            <dt>Energy reserves (bit 1.8, float)</dt>
            <dt>Shields up/down (bit 2.1, boolean, 2 bytes)</dt>
            <dt>Ship number (bit 2.2, int)</dt>
            <dt>Ship type? (bit 2.3, int)</dt>
            <dt>X coordinate (bit 2.4, float)</dt>
            <dd>
              <p>
                The ship's location on the X axis.
              </p>
            </dd>
            <dt>Y coordinate (bit 2.5, float)</dt>
            <dd>
              <p>
                The ship's location on the Y axis.
              </p>
            </dd>
            <dt>Z coordinate (bit 2.6, float)</dt>
            <dd>
              <p>
                The ship's location on the Z axis.
              </p>
            </dd>
            <dt>Pitch (bit 2.7, float)</dt>
            <dd>
              <p>
                (values still uncertain) Values range from -1.0 to 1.0 inclusive, where -1.0
                means the port (left) side points straight &ldquo;up&rdquo; and 1.0 means it
                points straight &ldquo;down.&rdquo;
              </p>
            </dd>
            <dt>Roll (bit 2.8, float)</dt>
            <dd>
              <p>
                (values still uncertain) Values range from -1.0 to 1.0 inclusive, where -1.0
                means straight &ldquo;up&rdquo; and 1.0 means straight &ldquo;down.&rdquo;
              </p>
            </dd>
            <dt>Heading (bit 3.1, float)</dt>
            <dd>
              <p>
                A value from pi to negative pi. A value of pi corresponds to a heading of 0&deg;
                (or &ldquo;north&rdquo;). The ship turns to port (left) as the value decreases.
                A value of 0.0 corresponds to a heading of 180&deg; (or &ldquo;south&rdquo;).
              </p>
            </dd>
            <dt>Velocity (bit 3.2, float)</dt>
            <dd>
              <p>
                A value from pi to negative pi. A value of pi corresponds to a heading of 0&deg;
                (or &ldquo;north&rdquo;). The ship turns to port (left) as the value decreases.
                A value of 0.0 corresponds to a heading of 180&deg; (or &ldquo;south&rdquo;).
              </p>
            </dd>
            <dt>Unknown (bit 3.3, short)</dt>
            <dt>Ship name (bit 3.4, string)</dt>
            <dt>Forward shields (bit 3.5, float)</dt>
            <dd>
              <p>
                Current strength of forward shield. A value greater than 0.0 indicates that this
                shield is up, while a value of 0.0 or less means it's down. If enemy fire
                penetrates the shield, this value can go negative; it will climb back towards
                0.0 as the shield recovers.
              </p>
            </dd>
            <dt>Forward shields max (bit 3.6, float)</dt>
            <dd>
              <p>
                The maximum strength of the forward shield.
              </p>
            </dd>
            <dt>Aft shields (bit 3.7, float)</dt>
            <dd>
              <p>
                Current strength of aft shield. A value greater than 0.0 indicates that this
                shield is up, while a value of 0.0 or less means it's down. If enemy fire
                penetrates the shield, this value can go negative; it will climb back towards
                0.0 as the shield recovers.
              </p>
            </dd>
            <dt>Aft shields max (bit 3.8, float)</dt>
            <dd>
              <p>
                The maximum strength of the aft shield.
              </p>
            </dd>
            <dt>Last docked base (bit 4.1, int)</dt>
            <dd>
              <p>
                The ID of the base that most recently initiated docking with the ship. This
                field updates when a base's tractor beam latches onto the ship. Undocking does
                not change this field; to detect undocking, watch for the ship's impulse (bit
                1.2) or warp factor (bit 1.7) fields to go above zero.
              </p>
            </dd>
            <dt><a href="#enum-alert-status">Alert status</a> (bit 4.2, byte, enumeration)</dt>
            <dt>Unknown (bit 4.3, float)</dt>
            <dt><a href="#enum-main-screen-view">Main screen view</a> (bit 4.4, byte, enumeration)</dt>
            <dd>
              <p>
                The view currently displayed on the ship's main screen.
              </p>
            </dd>
            <dt><a href="#enum-beam-frequency">Beam frequency</a> (bit 4.5, byte, enumeration)</dt>
            <dd>
              <p>
                The frequency to which the beams are currently tuned.
              </p>
            </dd>
            <dt>Available coolant or missiles (bit 4.6, byte)</dt>
            <dd>
              <p>
                The total amount of coolant if a capital ship, or the number of missiles if a fighter.
              </p>
            </dd>
            <dt>Science target (bit 4.7, int)</dt>
            <dd>
              <p>
                The ID of the object selected by the science officer, or 1 if the selection was
                cleared.
              </p>
            </dd>
            <dt>Captain target (bit 4.8, int)</dt>
            <dd>
              <p>
                The ID of the object selected by the captain, or 1 if the selection was
                cleared.
              </p>
            </dd>
            <dt><a href="#enum-drive-type">Drive type</a> (bit 5.1, byte, enumeration)</dt>
            <dd>
              <p>
                The type of drive system the ship has.
              </p>
            </dd>
            <dt>Scanning ID (bit 5.2, int)</dt>
            <dd>
              <p>
                The ID of the object currently being scanned by the science officer.
              </p>
            </dd>
            <dt>Scanning progress (bit 5.3, float)</dt>
            <dd>
              <p>
                A value from 0.0 to 1.0 inclusive indicating the current progress of the active
                science scan.
              </p>
            </dd>
            <dt>Reverse (bit 5.4, boolean, 1 byte)</dt>
            <dd>
              <p>
                True if the impulse drive is in reverse; false otherwise.
              </p>
            </dd>
            <dt>Unknown (bit 5.5, float)</dt>
            <dd>
              <p>
                Usually 0.0, though -1.0 has been observed.
              </p>
            </dd>
            <dt>Unknown (bit 5.6, byte)</dt>
            <dd>
              <p>
                <code>0x02</code> has been observed.
              </p>
            </dd>
            <dt>Unknown (bit 5.7, 4 bytes)</dt>
            <dt>Unknown (bit 5.8, byte, new as of v2.3.0)</dt>
            <dd>
              <p>
                0 has been observed.
              </p>
            </dd>
            <dt>Capital ship object ID (bit 6.1, int, new as of v2.3.0)</dt>
            <dd>
              <p>
                The object ID of the associated capital ship, if this ship is a fighter.
              </p>
            </dd>
            <dt>Accent Color (bit 6.2, int, new as of v2.4.0)</dt>
            <dd>
              <p>
                The accent color of the ship.
              </p>
            </dd>
            <dt>Unknown (bit 6.3, 4 bytes, new as of v2.4.0)</dt>
          </section>

          <section id="object-player-ship-upgrades">
            <h3>Player Ship Upgrades</h3>
            <p>
              New as of v2.1.5. Indicates how many of each upgrade the
              player ship has on board, which ones are active, and how
              many seconds are left of each type of activation.
            </p>
            <dl>
              <dt>Bit field (11 bytes)</dt>
              <dd>
                <p>
                  There are 28 upgrade types available, each of which
                  are described in this packet type. First, every
                  upgrade is described with an 8-bit boolean value. If
                  this value is true, the upgrade is currently
                  activated. Secondly, every upgrade is described with
                  a i8 (signed 8-bit integer), that determines how
                  many of that type of upgrade the ship has
                  available. Finally, every upgrade is described with
                  a u16, that detmines how many more seconds the
                  upgrade is active for.
                </p>
              </dd>

              <dt>Activation flags (bits 1.1-4.4, bool8)</dt>
              <dd>(bit 1.1) active_infusion_p_coils</dd>
              <dd>(bit 1.2) active_hydrogen_ram</dd>
              <dd>(bit 1.3) active_tauron_focusers</dd>
              <dd>(bit 1.4) active_carapaction_coils</dd>
              <dd>(bit 1.5) active_polyphasic_capacitors</dd>
              <dd>(bit 1.6) active_cetrocite_crystals</dd>
              <dd>(bit 1.7) active_lateral_array</dd>
              <dd>(bit 1.8) active_ecm_starpulse</dd>

              <dd>(bit 2.1) active_double_agent</dd>
              <dd>(bit 2.2) active_wartime_production</dd>
              <dd>(bit 2.3) active_infusion_p_coils_perm</dd>
              <dd>(bit 2.4) active_protonic_verniers</dd>
              <dd>(bit 2.5) active_tauron_focusers_perm</dd>
              <dd>(bit 2.6) active_regenerative_pau_grids</dd>
              <dd>(bit 2.7) active_veteran_damcon_teams</dd>
              <dd>(bit 2.8) active_cetrocite_heatsinks</dd>

              <dd>(bit 3.1) active_tachyon_scanners</dd>
              <dd>(bit 3.2) active_gridscan_overload</dd>
              <dd>(bit 3.3) active_override_authorization</dd>
              <dd>(bit 3.4) active_resupply_imperatives</dd>
              <dd>(bit 3.5) active_patrol_group</dd>
              <dd>(bit 3.6) active_fast_supply</dd>
              <dd>(bit 3.7) active_vanguard_refit_helm</dd>
              <dd>(bit 3.8) active_vanguard_refit_weap</dd>

              <dd>(bit 4.1) active_vanguard_refit_comm</dd>
              <dd>(bit 4.2) active_vanguard_refit_station</dd>
              <dd>(bit 4.3) active_vanguard_refit_eng</dd>
              <dd>(bit 4.4) active_vanguard_refit_systems</dd>

              <dt>Available upgrades (bits 4.5-7.8, i8)</dt>
              <dd>(bit 4.5) count_infusion_p_coils</dd>
              <dd>(bit 4.6) count_hydrogen_ram</dd>
              <dd>(bit 4.7) count_tauron_focusers</dd>
              <dd>(bit 4.8) count_carapaction_coils</dd>

              <dd>(bit 5.1) count_polyphasic_capacitors</dd>
              <dd>(bit 5.2) count_cetrocite_crystals</dd>
              <dd>(bit 5.3) count_lateral_array</dd>
              <dd>(bit 5.4) count_ecm_starpulse</dd>
              <dd>(bit 5.5) count_double_agent</dd>
              <dd>(bit 5.6) count_wartime_production</dd>
              <dd>(bit 5.7) count_infusion_p_coils_perm</dd>
              <dd>(bit 5.8) count_protonic_verniers</dd>

              <dd>(bit 6.1) count_tauron_focusers_perm</dd>
              <dd>(bit 6.2) count_regenerative_pau_grids</dd>
              <dd>(bit 6.3) count_veteran_damcon_teams</dd>
              <dd>(bit 6.4) count_cetrocite_heatsinks</dd>
              <dd>(bit 6.5) count_tachyon_scanners</dd>
              <dd>(bit 6.6) count_gridscan_overload</dd>
              <dd>(bit 6.7) count_override_authorization</dd>
              <dd>(bit 6.8) count_resupply_imperatives</dd>

              <dd>(bit 7.1) count_patrol_group</dd>
              <dd>(bit 7.2) count_fast_supply</dd>
              <dd>(bit 7.3) count_vanguard_refit_helm</dd>
              <dd>(bit 7.4) count_vanguard_refit_weap</dd>
              <dd>(bit 7.5) count_vanguard_refit_comm</dd>
              <dd>(bit 7.6) count_vanguard_refit_station</dd>
              <dd>(bit 7.7) count_vanguard_refit_eng</dd>
              <dd>(bit 7.8) count_vanguard_refit_systems</dd>

              <dt>Activation time (bits 8.1-11.4, u16)</dt>
              <dd>(bit 8.1) time_infusion_p_coils</dd>
              <dd>(bit 8.2) time_hydrogen_ram</dd>
              <dd>(bit 8.3) time_tauron_focusers</dd>
              <dd>(bit 8.4) time_carapaction_coils</dd>
              <dd>(bit 8.5) time_polyphasic_capacitors</dd>
              <dd>(bit 8.6) time_cetrocite_crystals</dd>
              <dd>(bit 8.7) time_lateral_array</dd>
              <dd>(bit 8.8) time_ecm_starpulse</dd>

              <dd>(bit 9.1) time_double_agent</dd>
              <dd>(bit 9.2) time_wartime_production</dd>
              <dd>(bit 9.3) time_infusion_p_coils_perm</dd>
              <dd>(bit 9.4) time_protonic_verniers</dd>
              <dd>(bit 9.5) time_tauron_focusers_perm</dd>
              <dd>(bit 9.6) time_regenerative_pau_grids</dd>
              <dd>(bit 9.7) time_veteran_damcon_teams</dd>
              <dd>(bit 9.8) time_cetrocite_heatsinks</dd>

              <dd>(bit 10.1) time_tachyon_scanners</dd>
              <dd>(bit 10.2) time_gridscan_overload</dd>
              <dd>(bit 10.3) time_override_authorization</dd>
              <dd>(bit 10.4) time_resupply_imperatives</dd>
              <dd>(bit 10.5) time_patrol_group</dd>
              <dd>(bit 10.6) time_fast_supply</dd>
              <dd>(bit 10.7) time_vanguard_refit_helm</dd>
              <dd>(bit 10.8) time_vanguard_refit_weap</dd>

              <dd>(bit 11.1) time_vanguard_refit_comm</dd>
              <dd>(bit 11.2) time_vanguard_refit_station</dd>
              <dd>(bit 11.3) time_vanguard_refit_eng</dd>
              <dd>(bit 11.4) time_vanguard_refit_systems</dd>
            </dl>
          </section>

          <section id="object-torpedo">
            <h3>Torpedo</h3>
            <dl>
              <dt>Bit field (1 byte)</dt>
              <dt>Unknown (byte)</dt>
              <dt>X coordinate (bit 1.1, float)</dt>
              <dd>
                <p>
                  The torpedo's location on the X axis.
                </p>
              </dd>
              <dt>Y coordinate (bit 1.2, float)</dt>
              <dd>
                <p>
                  The torpedo's location on the Y axis.
                </p>
              </dd>
              <dt>Z coordinate (bit 1.3, float)</dt>
              <dd>
                <p>
                  The torpedo's location on the Z axis.
                </p>
              </dd>
              <dt>Unknown (bit 1.4, float?)</dt>
              <dd>
                <p>
                  Appears to range from -1.0 to 1.0.
                </p>
              </dd>
              <dt>Unknown (bit 1.5, float)</dt>
              <dt>Unknown (bit 1.6, float)</dt>
              <dt>Unknown (bit 1.7, int)</dt>
              <dt>Unknown (bit 1.8, int)</dt>
            </dl>
          </section>

          <section id="object-weapons-console">
            <h3>Weapons Console</h3>
            <p>
              Note: The plasma shock torpedo type was added in v.2.1.5. It was inserted at bit 1.5,
              and all subsequent bits were shifted by one bit. Before this addition, the bit field
              was only three bytes long instead of four.
            </p>
            <dl>
              <dt>Bit field (4 bytes)</dt>
              <dt>Ordnance counts (bits 1.1-1.5, byte array)</dt>
              <dd>
                <p>
                  This array contains up to five byte elements. Each element gives how many of a
                  particular ordinance are stored on the ship, in the following order: homing
                  missiles, nukes, mines, EMPs, plasma shocks.
                </p>
              </dd>
              <dt>Unknown (bit 1.6, byte)</dt>
              <dt>Tube (un)load times (bits 1.7-2.4, float array)</dt>
              <dd>
                <p>
                  This array contains up to six float elements. Each element gives the (un)load
                  time for the corresponding tube. This field should be ignored (even when
                  present) if the tube's status is not loading or unloading.
                </p>
              </dd>
              <dt><a href="#enum-tube-status">Tube status</a> (bits 2.5-3.2, byte array)</dt>
              <dd>
                <p>
                  This array contains up to six byte elements. Each element indicates the
                  occupation status of each tube.
                </p>
              </dd>
              <dt><a href="#enum-ordnance-type">Ordnance type</a> (bits 3.3-3.8, byte array)
              <dd>
                <p>
                  This array contains up to six byte elements. Each element indicates the type of
                  ordnance in each tube. If the tube's status is unloaded, the tube is empty, and
                  this field should be ignored even when present.
                </p>
              </dd>
              <dt>Unused (bits 4.1-4.8)</dt>
            </dl>
          </section>

          <section id="object-whale">
            <h3><del>Whale</del></h3>
            <p>
              This type became obsolete starting v2.1.5, when whales were folded into the new
              creature object type.
            </p>
            <dl>
              <dt>Bit field (2 bytes)</dt>
              <dt>Name (bit 1.1, string)</dt>
              <dd>
                <p>
                  Always &ldquo;WHALE&rdquo; in non-custom missions.
                </p>
              </dd>
              <dt>Unknown (bit 1.2, int)</dt>
              <dt>Unknown (bit 1.3, int)</dt>
              <dt>X coordinate (bit 1.4, float)</dt>
              <dt>Y coordinate (bit 1.5, float)</dt>
              <dt>Z coordinate (bit 1.6, float)</dt>
              <dt>Pitch (bit 1.7, float)</dt>
              <dt>Roll (bit 1.8, float)</dt>
              <dt>Heading (bit 2.1, float)</dt>
              <dt>Unknown (bit 2.2, float)</dt>
              <dt>Unknown (bit 2.3, float)</dt>
              <dd>
                <p>
                  Values range from 0.0 to 1.0.
                </p>
              </dd>
              <dt>Unknown (bit 2.4, float)</dt>
              <dd>
                <p>
                  Values range up to 1.0. Lowest value seen so far is approximately 0.855, minimum
                  <em>might</em> be 0.0.
                </p>
              </dd>
              <dt>Unknown (bit 2.5, float)</dt>
              <dd>
                <p>
                  Observed ranges have been from about 0.5 to 1.36.
                </p>
              </dd>
            </dl>
          </section>

          <section id="object-other">
            <h3>Other Objects</h3>
            <p>
              The remaining object types (asteroids, black holes and mines) all use the same
              properties. Prior to v2.1.5, anomalies and space monsters also used this structure.
            </p>
            <dl>
              <dt>Bit field (1 byte)</dt>
              <dd>
                <p>
                  The object's location on the X axis.
                </p>
              </dd>
              <dt>X coordinate (bit 1.1, float)</dt>
              <dd>
                <p>
                  The object's location on the X axis.
                </p>
              </dd>
              <dt>Y coordinate (bit 1.2, float)</dt>
              <dd>
                <p>
                  The object's location on the Y axis.
                </p>
              </dd>
              <dt>Z coordinate (bit 1.3, float)</dt>
              <dd>
                <p>
                  The object's location on the Z axis.
                </p>
              </dd>
              <dt>Name (bit 1.4, string)</dt>
              <dd>
                <p>
                  The object's name. In standard missions, this property is never used, but there
                  may be named asteroids, black holes or mines in custom missions.
                </p>
              </dd>
              <dt>Unknown (bit 1.4, float?)</dt>
              <dt>Unknown (bit 1.5, float)</dt>
              <dt>Unknown (bit 1.6, float)</dt>
              <dt>Unknown (bit 1.7, int)</dt>
              <dt>Unknown (bit 1.8, int)</dt>
            </dl>
          </section>
        </section>

        <section id="game-events">
          <h2>Game Events</h2>
          <p>
            Certain in-game events cause the transmission specific patterns of packets. This section
            documents some of these observed patterns:
          </p>
          <section>
            <h3>Connected to server, no simulation running</h3>
            <ol>
              <li><a href="#welcomepacket">WelcomePacket</a></li>
              <li><a href="#versionpacket">VersionPacket</a></li>
              <li><a href="#consolestatuspacket">ConsoleStatusPacket</a></li>
              <li><a href="#allshipsettingspacket">AllShipSettingsPacket</a></li>
            </ol>
          </section>
          <section>
            <h3>Simulation starts while client is connected</h3>
            <ol>
              <li><a href="#skyboxpacket">SkyboxPacket</a></li>
              <li>Unknown packet: type=<code>0xf754c8fe</code> subtype=<code>0x08</code></li>
              <li><a href="#difficultypacket">DifficultyPacket</a></li>
              <li><a href="#allshipsettingspacket">AllShipSettingsPacket</a></li>
            </ol>
          </section>
          <section>
            <h3>Client clicks "Ready" while simulation is already running</h3>
            <ol>
              <li><a href="#pausepacket">PausePacket</a></li>
              <li><a href="#skyboxpacket">SkyboxPacket</a></li>
              <li><a href="#difficultypacket">DifficultyPacket</a></li>
              <li><a href="#allshipsettingspacket">AllShipSettingsPacket</a></li>
              <li><a href="#keycapturetogglepacket">KeyCaptureTogglePacket</a></li>
            </ol>
          </section>
          <section>
            <h3>Fighter is launched</h3>
            <ol>
              <li><a href="#fighterlaunchpacket">FighterLaunchPacket</a></li>
              <li><a href="#fighterlaunchedpacket">FighterLaunchedPacket</a></li>
              <li><a href="#fighterbaystatuspacket">FighterBayStatusPacket</a> (informing that the fighter is no longer in the bay)</li>
              <li><a href="#objectupdatepacket">ObjectUpdatePacket</a> (fighters are now updated as separate ship objects)</li>
            </ol>
          </section>
          <section>
            <h3>Fighter is docked</h3>
            <ol>
              <li><a href="#helmrequestdockpacket">HelmRequestDockPacket</a> (sent by the fighter)</li>
              <li><a href="#destroyobjectpacket">DestroyObjectPacket</a> (destroys the fighter's ship object)</li>
              <li><a href="#fighterbaystatuspacket">FighterBayStatusPacket</a> (informating that the fighter is now in the bay)</li>
              <li><a href="#objectupdatepacket">ObjectUpdatePacket</a> (the docked fighter is no longer a separate ship object)</li>
            </ol>
          </section>
        </section>

        <section id="ship-internals">
          <h2>Ship Internals</h2>
          <p>
            The layout of system nodes in a vessel is stored in an .snt file referenced by the
            vessel's entry in vesselData.xml. This section documents the file format used by these
            files.
          </p>
          <p>
            A vessel's internal system grid is laid out in a 5 &times; 5 &times; 10 matrix: X (port
            to starboard), Y (dorsal to ventral), then Z (fore to aft). An .snt file contains 250
            blocks of data, with each block representing one node in the system grid. The nodes are
            iterated first in the X axis, then Y, then Z. So the first ten nodes are (0,0,0) through
            (0,0,9), followed by (0,1,0) through (0,1,9), etc.
          </p>
          <p>
            Each block is 32 bytes long. The first 12 bytes contain the node's position in the
            vessel's 3D coordinate system. (This is separate from its system grid coordinates.) The
            coordinates are stored as three floats: X, Y, then Z.
          </p>
          <p>
            Next is an int value which describes what kind of node it is. A value from 0 to 7
            indicates that the node contains vital equipment for one of the ship systems; you can
            tell which system by looking up the corresponding value in the
            <a href="#enum-ship-system">ship system enumeration</a>. A value of -1 indicates a
            hallway; it contains no ship systems but is still accessible to DAMCON teams. A value of
            -2 indicates an empty node; it contains no ship systems and is not accessible to DAMCON
            teams. This is typically for nodes that would fall outside the vessel's hull.
          </p>
          <p>
            The remaining 16 bytes in the block appear to be reserved for future use.
          </p>
        </section>
      </content>
    </div>
  </body>
</html>
