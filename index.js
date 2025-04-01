
console.log("hi");

$('#nutrition-panel').nutritionLabel({
    showLegacyVersion : false,
    showCaffeine: false
    
})

calorieRow = d3.selectAll(".nf-calories"); // will store .nf-calories now

calorieRow.on('mouseover', function(event, d) {
        d3.select(this).node().classList.add("highlight");
        // calorieRow.node().classList.add("highlight");
    })


    .on('mouseout', function(event, d) {
        d3.select(this).node().classList.remove("highlight");
        // caloreRow.node().classList.remove("highlight");
    });





nfLines = d3.selectAll(".nf-line");

nfLines.on('mouseover', function(event, d) {

    // console.log(d3.select(this).node().classList)
    d3.select(this).node().classList.add("lineHighlight");
    // nfLines.node().classList.add("highlight");
    })


    .on('mouseout', function(event, d) {
        d3.select(this).node().classList.remove("lineHighlight");
        // nfLines.node().classList.remove("highlight");
    });










