

var nodes = new vis.DataSet([
    {id: 'CS1101', label: 'CS1101',level: 1},
    {id: 'CS1231', label: 'CS1231',level: 1},
    {id: 'CS2030', label: 'CS2030',level: 2},
    {id: 'CS2040', label: 'CS2040',level: 2},
    {id: 'CS3230', label: 'CS3230',level: 3}
]);



// create an array with edges
var edges = new vis.DataSet([
    {from: 'CS1101', to: 'CS2030' , arrows: 'to'},
    {from: 'CS1101', to: 'CS2040' , arrows:'to'},
    {from: 'CS2040', to: 'CS3230' , arrows: 'to'},
    {from: 'CS1231', to: 'CS2040' , arrows: 'to'}
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
  

  edges: {
                    smooth: {
                        type: 'cubicBezier',
                        
                        roundness: 0.4
                    }
                },
      layout:{
        hierarchical: {
            sortMethod: 'directed',
            shakeTowards: 'roots',
            edgeMinimization: 'false',
            blockShifting:'false'
        }





        
}
};

// initialize your network!
var network = new vis.Network(container, data, options);

function addNode() {

  var modCode = document.getElementById("module-label").value;
  var level = modCode.charAt(2);
  

  nodes.add({
      id : modCode,
      label : modCode,
      level : parseInt(level, 10)

  });


}


function addEdge() {
  var from = document.getElementById('edge-from').value;
  var to = document.getElementById('edge-to').value;
  edges.add({
    id : from + to,
      from: from,
      to: to,
      arrows : 'to'
  });
 

}


