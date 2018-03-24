Ext.application({
        
        launch: function(){
            Ext.create('Ext.data.Store', {
                    storeId: 'tutorials',
                    fields:[ 'S.No','Title', 'Link'],
                    data: [
                        { no:'1', name: 'What is Ext.JS?', link: 'http://kyrierose.github.io'}
                    ]
            });

                Ext.create('Ext.grid.Panel', {
                    title: 'Extjs Tutorials',
                    store: Ext.data.StoreManager.lookup('tutorials'),
                    columns: [
                        { text: 'S.No', dataIndex: 'no' },
                        { text: 'Name', dataIndex: 'name' },
                        { text: 'Link', dataIndex: 'link' },
                    ],
                    height: 200,
                    width: 400,
                    renderTo: Ext.getBody()
                });
            alert();    
        }
});
        
