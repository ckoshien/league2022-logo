import React from "react";
import ReactDOM from "react-dom";

let w = window;
let d = w.document;
let b = w.document.body;
var h = w.innerHeight;
var u = d.documentElement.scrollTop || b.scrollTop;
var z = 9999;
var t = new Array();
var l = new Array();
var y = new Array();
var s = new Array();
var g = new Array();
var c = new Array();
var k = 0;
let defaultWidth = w.innerWidth - 10;

export default class SakuraFlurry extends React.Component {
  componentDidMount() {
    setInterval(() => {
      for (var i = 0; i < 15; i++) {
        if (t[i] < u + h - 40) {
          if (y[i] >= c[i]) {
            l[i] = l[i] + 0.5 + Math.random() * 0.5;
          } else {
            l[i] = l[i] - 0.5 - Math.random() * 0.5;
          }
          if (y[i] * 2 <= c[i]) {
            c[i] = 0;
          }
        } else {
          t[i] = u - 40;
          l[i] = Math.random() * defaultWidth;
        }
        if (l[i] > defaultWidth) {
          l[i] = Math.random() * defaultWidth;
        }
        if (k >= 100 && k <= 110) {
          l[i] = l[i] + 1;
        } else if (k >= 111 && k <= 120) {
          l[i] = l[i] + 3;
        } else if (k >= 121 && k <= 129) {
          l[i] = l[i] + 5;
        } else if (k >= 130 && k <= 137) {
          l[i] = l[i] + 7;
        } else if (k >= 138 && k <= 144) {
          l[i] = l[i] + 9;
        } else if (k >= 145 && k <= 300) {
          l[i] = l[i] + 11;
        } else if (k >= 301 && k <= 311) {
          l[i] = l[i] + 9;
        } else if (k >= 312 && k <= 322) {
          l[i] = l[i] + 7;
        } else if (k >= 323 && k <= 335) {
          l[i] = l[i] + 5;
        } else if (k >= 336 && k <= 349) {
          l[i] = l[i] + 3;
        } else if (k >= 350 && k <= 354) {
          l[i] = l[i] + 1;
        } else if (k >= 500 && k <= 510) {
          l[i] = l[i] - 1;
        } else if (k >= 511 && k <= 520) {
          l[i] = l[i] - 3;
        } else if (k >= 521 && k <= 529) {
          l[i] = l[i] - 5;
        } else if (k >= 530 && k <= 537) {
          l[i] = l[i] - 7;
        } else if (k >= 538 && k <= 544) {
          l[i] = l[i] - 9;
        } else if (k >= 545 && k <= 700) {
          l[i] = l[i] - 11;
        } else if (k >= 701 && k <= 711) {
          l[i] = l[i] - 9;
        } else if (k >= 712 && k <= 722) {
          l[i] = l[i] - 7;
        } else if (k >= 723 && k <= 735) {
          l[i] = l[i] - 5;
        } else if (k >= 736 && k <= 749) {
          l[i] = l[i] - 3;
        } else if (k >= 750 && k <= 754) {
          l[i] = l[i] - 1;
        } else if (k >= 900) {
          k = 0;
        }

        t[i] = t[i] + s[i];
        g[i] = ReactDOM.findDOMNode(this.refs["hanabira" + i]);
		//cap[i] = ReactDOM.findDOMNode(this.refs["cap" + i]);
		g[i].style.top = t[i] + "px";
		g[i].style.left = l[i] + "px";
        c[i]++;
	  }
      k++;
    }, 70);
  }

  render() {
    let elements = [];
    for (var i = 0; i < 15; i++) {
      t[i] = Math.random() * -1000 + u;
      l[i] = Math.random() * defaultWidth;
      y[i] = Math.random() * 40 + 5;
      s[i] = Math.random() * 5 + 2;

      c[i] = 0;
      let m = (
        <div
          className={
            "hana t" +
            (Math.floor(Math.random() * 6) + 1) +
            " y" +
            (Math.floor(Math.random() * 6) + 1)
          }
          ref={"hanabira" + i}
          id={"hanabira" + i}
          style={{
            zIndex: z + i,
            top: t[i],
            left: l[i]
          }}
        >
          <div></div>
        </div>
	  );
	  
	  elements.push(m);
    }

    return <div id="sakura">{elements}</div>;
  }
}