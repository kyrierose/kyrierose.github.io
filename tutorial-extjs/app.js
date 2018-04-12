Ext.onReady(function(){
        
        alert("Select respective row for tutorial");
        
        var mainStore = Ext.create('Ext.data.Store', {
                    storeId: 'tutorials',
                    fields:[ 'S.No','Title', 'Link'],
                    data: [
                        { no:'1', title: 'What is Ext.js?', link: 'https://kyrierose.github.io/tutorial-extjs/contents/whatIsExtjs.html'},
                        { no:'2', title: 'Setting up Ext.js?', link: 'https://kyrierose.github.io/tutorial-extjs/contents/setupExtjs.html'}    
                    ]
            });

             var pi = Ext.create('Ext.grid.Panel', {
                    title: 'Extjs Tutorials',
                    store: mainStore,
                    columns: [
                        { text: 'S.No', dataIndex: 'no', flex: 1},
                        { text: 'Title', dataIndex: 'title', flex: 5},
                        { text: 'Link', dataIndex: 'link', flex: 8},
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
                    width: "60%",
                    renderTo: Ext.getBody()
                });
});
