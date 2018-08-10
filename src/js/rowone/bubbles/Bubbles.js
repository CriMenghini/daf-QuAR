import React, { Component } from 'react';
import * as d3 from "d3";
import ReactFauxDOM from 'react-faux-dom';
import '../../../css/style.css';




class Bubbles extends Component {

  render() {
    let centraline = this.props.data


    let maxSize = d3.max(centraline, function(el) {return el.size});
    let sizeScale = d3.scaleLinear().domain([ 0, maxSize ]).range([ 0, 10 ]);

    //Create the element
    const div = new ReactFauxDOM.Element('div')
    div.setAttribute('class', 'bubble')
    div.setAttribute('id', 'bubble-container')



    d3.select(div)
      .append("svg")
      .attr('class', 'svg-bubbles')
      .append("g")
      .attr("id", "centraline")
      .attr("transform", "translate("+'40'+","+ '40' +")")
      .selectAll("g")
      .data(centraline)
      .enter()
      .append("g")
      .attr("class", "overallG")
      .attr("transform", function (d,i) {return "translate(" + (i * sizeScale(maxSize) * 2) + ", 10)"})
      .append("circle")
      .attr("r", function (d) {return sizeScale(d.size);})
      .attr('id', function(d) {return d.nome})





     //const centralina = ReactFauxDOM.Element('g.overallG');
     /*var centralina = d3.selectAll("g.overallG");
     centralina
        .append("circle")
        .attr("r", 0)
        .attr('id', function(d) {return d.nome})
        .transition()
        .delay(function(d,i) {return i * 100})
        .duration(500)
        .attr("r", function (d) {return sizeScale(d.size);})

     centralina
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", sizeScale(maxSize))
        .attr('x', sizeScale(maxSize)*2)
        .attr('transform', 'rotate(40)')
        .style("font-size", "6px")
        .text(function(d) {return d.nome;});*/



    //DOM manipulations done, convert to React
    return div.toReact()
  }

}

export default Bubbles;