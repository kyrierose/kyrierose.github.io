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
                        { text: 'Name', dataIndex: 'name', flex: 1 },
                        { text: 'Link', dataIndex: 'link' },
                    ],
                    style: 'margin:0 auto;',
                    height: 700,
                    width: "100%",
                    renderTo: Ext.getBody()
                });
});
