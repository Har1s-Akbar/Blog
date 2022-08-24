export default {
    name: 'comments',
    title: 'Comments',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        title: 'Approved',
        name:'approved',
        type: 'boolean'
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string'
      },
      {
        name: 'message',
        title: 'Name',
        type: 'string'
      },{
        name: 'post',
        type: 'reference',
        to:[{type: 'post'}]
      }
    ]
  }
  