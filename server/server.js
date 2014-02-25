// All Tomorrow's Parties -- server

Meteor.publish("directory", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});

Meteor.publish("parties", function () {
  return Parties.find(
    {$or: [{"public": true}, {invited: this.userId}, {owner: this.userId}]});
});

ServiceConfiguration.configurations.remove({ service: 'auth0' });
ServiceConfiguration.configurations.insert({
  service:      'auth0',
  domain:       'contoso.auth0.com',
  clientId:     'w560wy7zE4S3VRVA9SAkhy4N7E6hhZxJ',
  clientSecret: '2HbTrXcXoTAMdHM_SsN3EBQ6DMbYvwExVGZIXF6Kmzce1tuIAU7MxnT2yUnqifkh'
});
