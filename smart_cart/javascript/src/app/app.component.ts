import { Component } from '@angular/core';

let initialize = function () {
  let init_style = 'padding: 0;' +
                    'margin: 0;\n' +
                    'display: flex;\n' +
                    'flex-direction: column;\n' +
                    'align-content: stretch;\n' +
                    'align-items: stretch;\n' +
                    'height: 100vh;'

  document.getElementsByTagName("html")[0].setAttribute("style", init_style)
  document.getElementsByTagName("body")[0].setAttribute("style", init_style)
}

initialize()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registore';
}

// @Component({
//   selector: 'app-window',
//   templateUrl: './window/window.component.html',
//   styleUrls: ['./window/window.component.css'],
// })
// export class AppWindow {}

