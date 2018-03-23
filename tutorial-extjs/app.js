    Ext.application({

      launch: function () {

        Ext.Viewport.add({

          xtype: 'grid',

          title: 'TutorialList',

          columns: [

            {text: 'S.No', width: 50, dataIndex: 'sno'},  
              
            {text: 'Name', width: '100%', dataIndex: 'name'}

          ],

          data: data,

          listeners: {

            click: onClick

         }

        });

      }

    });

     

    function onClick() {

      alert("Something");

    };

     

    var data = [

      { sno:'1', name: 'What is Ext.js?', link:'./what-is-extjs' }

    ]
