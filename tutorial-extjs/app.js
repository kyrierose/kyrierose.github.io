Ext.onReady(function(){
        var mainStore = Ext.create('Ext.data.Store', {
                    storeId: 'tutorials',
                    fields:[ 'S.No','Title', 'Link'],
                    data: [
                        { no:'1', name: 'What is Ext.JS?', link: 'http://kyrierose.github.io'}
                    ]
            });

                Ext.create('Ext.grid.Panel', {
                    title: 'Extjs Tutorials',
                    store: mainStore,
                    columns: [
                        { text: 'S.No', dataIndex: 'no' },
                        { text: 'Name', dataIndex: 'name', width:200 },
                        { text: 'Link', dataIndex: 'link' , width: 200},
                    ],
                    style: 'margin:0 auto;',
                    height: 700,
                    align: 'center',
                    width: "70%",
                    renderTo: Ext.getBody()
                });
});
