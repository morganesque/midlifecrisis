(function()
{
    var container = svg.append('g')
        .attr('transform','translate(320,240)')
        .attr('class','pie');

    var dates = the_dates.whereBookend({group:'kids'});
    var data = [];
    for (var i = 0; i < dates.length; i++) {
        if (i)
        {
            var a = dates[i].get('date');        
            var b = dates[i-1].get('date');        
            data.push({
                num:a-b,
                label: i-1,
            });
        }
    };     

    var radius = 100;

    var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(2.5*radius/4);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function(d){ 
            return d.num; 
        });

    var g = container.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    var col = pusher.color('goldenrod').hueRange(30,data.length);

    g.append("path")
        .attr("d", arc)
        .style("fill", function(d,i) {return col[i%col.length].hex6(); });

    g.append("text")
        .attr("transform", function(d) {            
            return "translate(" + arc.centroid(d) + ")"; 
        })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .attr("fill", function(d,i)
        {
            return col[i%col.length].contrastWhiteBlack().hex6();
        })
        .text(function(d,i) { return d.data.label; });
})();