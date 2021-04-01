import COVID from '../../assets/projects_images/covid19.png'
import portfolio from '../../assets/projects_images/portfolio.png'
import click2buy from '../../assets/projects_images/click2buy.png'
const data_projects = [
    {
        name: 'Portfolio',
        image: portfolio,
        deployed_url: '',
        github_url: '',
        category: ['react.js']
    },

    {
        name: 'ClickBuy',
        image: click2buy,
        deployed_url: 'https://click2buyy.herokuapp.com/',
        github_url: 'https://github.com/NavaUgade96/Click2Buy',
        category: ['react.js','node.js','mongoDB',]
    },

    {
        name: 'Covid19-Tracker',
        image: COVID,
        deployed_url: '',
        github_url: 'https://github.com/NavaUgade96/Covid19-Tracker',
        category: ['react.js',]
    },



   
    
]

export default data_projects;