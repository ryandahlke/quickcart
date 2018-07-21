import {Injectable} from "@angular/core";

@Injectable()
export class Debouncer {
  debounce(func, wait: number, callImmediately=true) {

    let timeout;

    return function executedFunction() {
      let context = this;
      let args = arguments;

      let later = function() {
        timeout = null;
        if (!callImmediately) func.apply(context, args);
      };

      let callNow = callImmediately && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow){
        func.apply(context, args);
      }
    };
  }
}
