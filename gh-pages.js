var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/LiamMacmillan/LiamMacmillan.github.io',
        user: {
            name: 'Liam Macmillan',
            email: 'liammacmillan@hotmail.co.uk'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
