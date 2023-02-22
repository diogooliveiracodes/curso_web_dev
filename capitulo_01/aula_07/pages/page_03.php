<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Minha Navbar Estilizada</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="page_01.php">PAGE 01</a></li>
        <li><a href="page_02.php">PAGE 02</a></li>
        <li>
          <select onchange="location = this.value;">
            <option value="">PAGE 03</option>
            <option value="#div1">Div 01</option>
            <option value="#div2">Div 02</option>
            <option value="#div3">Div 03</option>
          </select>
        </li>
      </ul>
    </nav>
    <div>
        <h1 class="color-green">Página 03</h1>
    </div>
    <div id="div1">
        <h1>Div 01</h1>
    </div>
    <div id="div2">
        <h1>Div 02</h1>
    </div>
    <div id="div3">
        <h1>Div 03</h1>
    </div>
  </body>
</html>
