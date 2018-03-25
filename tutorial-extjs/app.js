Ext.onReady(function(){
        var mainStore = Ext.create('Ext.data.Store', {
                    storeId: 'tutorials',
                    fields:[ 'S.No','Title', 'Link'],
                    data: [
                        { no:'1', title: 'What is Ext.js?', link: 'http://kyrierose.github.io/'}
                    ]
            });

                Ext.create('Ext.grid.Panel', {
                    title: 'Extjs Tutorials',
                    store: mainStore,
                    columns: [
                        { text: 'S.No', dataIndex: 'no' },
                        { text: 'Title', dataIndex: 'title', width:200 },
                        { text: 'Link', dataIndex: 'link' , width: 200},
                    ],
                    style: 'margin:0 auto;',
                    height: 700,
                    align: 'center',
                    listeners: {
                        itemclick: function(dv, record, item, index, e) {
                                var selectedRecord = pi.getSelectionModel().getSelection()[0];
                                if(selectedRecord === null)
                                    alert("Select a tutorial.");
                                else{
                                    var row = pi.store.indexOf(selectedRecord);
                                    var gridstore = pi.getStore();
                                    var rowdata = gridstore.data.items[row];
                                    
                                    window.open(rowdata.data['link']);
                                    
                                }
                        }
                    },
                    width: "50%",
                    renderTo: Ext.getBody()
                });
});
