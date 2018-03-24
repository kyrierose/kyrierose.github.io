Ext.onReady(function(){
        var mainStore = Ext.create('Ext.data.Store', {
                    storeId: 'tutorials',
                    fields:[ 'S.No','Title', 'Link'],
                    data: [
                        { no:'1', title: 'What is Ext.js?', link: 'http://kyrierose.github.io/updated'}
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
                                var selectedRec = dv.getSelectionModel().getSelected();          
                                alert(selectedRec.get('link'));
                                alert(selectedRec.get('Link'));//Will display text of name column of selected record
                        }
                    },
                    width: "50%",
                    renderTo: Ext.getBody()
                });
});
