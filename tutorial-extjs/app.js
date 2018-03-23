    Ext.application({

      launch: function () {

        Ext.Viewport.add({

          xtype: 'grid',

          title: 'Tutorial List',

          columns: [

            {text: 'S.No', flex: 1, dataIndex: 'sno'},  
              
            {text: 'Name', width: 500, dataIndex: 'name'}

          ],

          data: data,

          listeners: {

            click: onClick

         }

        });

      }

    });

     

    function onClick(sender, record) {

      var r = record[0].data;

      alert(r.link);

    };

     

    var data = [

      { sno:'1', name: 'What is Ext.js?', link:'./what-is-extjs' }

    ]
