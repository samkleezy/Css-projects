/**
 * ---------------------------------------
 * Demo hecha por mi en base a la demo de amCharts 4.

 * https://www.amcharts.com/
 
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
chart.legend = new am4charts.Legend();

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

networkSeries.data = [{
  name: 'Architecture and Construction',
  fixed: true,
  x: am4core.percent(20),
  y: am4core.percent(50),  
  children: [{
    name: 'Building Engineering', value: 10
  }, {
    name: 'Building Information Modelling',
    children: [{
      name: '3D', value: 1
    }, {
      name: 'Management', value: 3
    }, {
      name: 'Teaching', value: 3
    },{
      name: 'WiseBuild.es', value: 6, linkWith:["Projects"]
    }, {
      name: 'Softwares', 
      children:[
        {
      name: 'Revit', value: 1},
        {
      name: 'Dynamo', value: 1},
      {
      name: 'Navisworks', value: 1}
      ]
    }]
  }]
}, {
  name: 'Entrepreneurship',   
  children: [{
    name: 'Projects',
    children: [{
      name: 'B2IM Studio', value: 2, linkWith:["Building Information Modelling"]
    }, {
      name: 'Wanna Party', value: 3
    }, {
      name: 'TheHunterGame.es', value: 3
    }, {
      name: 'CartaSIN.com', value: 5
    }]
  }, {
    name: 'Skills',
    children: [{
      name: 'Web Skills',children: [{
      name: 'Wordpress', value: 1
    }, {
      name: 'Low-Code Solutions', value: 1}, 
               {
      name: 'Growth Strategy', value: 1}, 
{
      name: 'Digital Strategy', value: 1
    }]
    }, {
      name: 'Holistic Vision', value: 1}, 
               {
      name: 'Networking', value: 1}, 
{
      name: 'Digital Strategy', value: 1
    }]
  },]
}, {
  name: 'Hobbies',
    
  children: [{
    name: 'Food',
    children: [{
      name: 'Cooking', value: 2
    }, {
      name: 'Eating', value: 2
    }, {
      name: 'Restaurants', value: 3, linkWith:['CartaSIN.com']
    }]
  }, {
    name: 'Culture',
    children: [{
      name: 'Books', value: 1
    }, {
      name: 'Films', value: 1
    }, {
      name: 'ShortFilms', value: 2
    }, {
      name: 'Drawing', value: 2
    }, {
      name: 'Writing', value: 1
    }]
  }]
}, {
  name: 'Studies',
  fixed: true,
  x: am4core.percent(80),
  y: am4core.percent(50),    
  children: [{
    name: 'Building Engineering Degree', value: 3, linkWith: ["Building Engineering"]
  }, {
    name: 'BIM Project Management', value: 4, linkWith: ["Building Information Modelling"]
  }, {
    name: 'Master Degree in 3D Animation',linkWith: ["Films", "ShortFilms"], 
    children: [{
      name: '3D Animation', linkWith: ["Drawing"], value: 1
    }, {
      name: '3D Modelling', value: 1, linkWith: ["3D"]
    }, {
      name: 'Rendering', value: 1
    }, {
      name: 'Acting', value: 1
    }, {
      name: 'Softwares', 
      children: [{
      name: 'Autodesk Maya', value: 1
    }, {
      name: 'Blender', value: 1
    }, {
      name: 'ShotGun', value: 1
    }]
    }]
  }, {
    name: 'Softwares',
    children: [{
      name: 'Autodesk Maya', value: 1
    }, {
      name: 'Blender', value: 0.5
    },{
      name: 'MSOffice', value: 0.5
    },{
      name: 'PowerBI', value: 0.5
    },{
      name: 'Procreate', value: 0.5
    },{
      name: 'Figma', value: 0.5
    },{
      name: 'B360', value: 0.5
    },{
      name: 'Dynamo', value: 0.5
    },{
      name: 'Navisworks', value: 0.5
    },{
      name: 'Revit', value: 0.5
    }, {
      name: 'ShotGun', value: 1
    }]
  }]

}];

networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";
networkSeries.dataFields.fixed = "fixed";

networkSeries.nodes.template.propertyFields.x = "x";
networkSeries.nodes.template.propertyFields.y = "y";

networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 10;
networkSeries.maxLevels = 3;
networkSeries.nodes.template.label.hideOversized = true;
networkSeries.nodes.template.label.truncate = true;