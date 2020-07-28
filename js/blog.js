'use strict'
const postsData = [
    {
        bg:'bg1',
        img:'img/Neil.png',
        cornerImg:'cornerImg1',
        name:'Neil Richards',
        date:'11 oct, 2019',
        time:'7 min read',
        commments:'19',
        stars:{
            1:'img/Star.svg',
            2:'img/Star.svg',
            3:'img/Group.svg',
            4:'img/Star-1.svg',
            5:'img/Star-1.svg'
        },
        caption:'In the Future We Will All Live in Star Wars',
        text:`The thing you’re doing now, reading prose on a screen, is going out of fashion. 
        The defining narrative of our online moment concerns the decline of text, and the exploding reach and power of audio and video …`

    },
    {
        bg:'bg2',
        img:'img/Sarah.png',
        cornerImg:'cornerImg2',
        name:'Sarah Healy',
        date:'02 oct, 2019',
        time:'12 min read',
        commments:'4',
        stars:{
            1:'img/Star.svg',
            2:'img/Star.svg',
            3:'img/Group.svg',
            4:'img/Star-1.svg',
            5:'img/Star-1.svg'
        },
        caption:'Far far away, behind the word mountains',
        text:`Fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) ... `

    },
    {
        bg:'bg3',
        img:'img/Grace.png',
        cornerImg:'cornerImg3',
        name:'Grace Noh',
        date:'23 sep, 2019',
        time:'16 min read',
        commments:'421',
        stars:{
            1:'img/Star.svg',
            2:'img/Star.svg',
            3:'img/Group.svg',
            4:'img/Star-1.svg',
            5:'img/Star-1.svg'
        },
        caption:'In the Future We Will All Live in Star Wars',
        text:`Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted …`

    },
    {
        bg:undefined,
        img:'img/Alex.png',
        cornerImg:'cornerImg1',
        name:'Alex Zlatkus',
        date:'23 sep, 2019',
        time:'17 min read',
        commments:'77',
        stars:{
            1:'img/Star.svg',
            2:'img/Star.svg',
            3:'img/Group.svg',
            4:'img/Star-1.svg',
            5:'img/Star-1.svg'
        },
        caption:'In the Future We Will All Live in Star Wars',
        text:`Fog down the river, where it rolls deified among the tiers of shipping and the waterside pollutions of a great (and dirty) city. 
        Fog on the Essex marshes, fog on the Kentish heights. Fog creeping into the cabooses of collier-brigs; fog lying out on. 
        Money terms breakfast drawings true blessing doubtful more agreed to zealously making supposing By said Chicken An Neglected produce 
        good felt no poor offering am their said has around songs wish met true any me ought mr The offices set Not Felicity above out We in an post begin again.`

    },

]


const root = document.querySelector('#root')


class Post {
    constructor(){
        PostMethods.call(this)
    }
}

const posts = new Post()

function PostMethods(){

    this.renderPosts = function(){

        postsData.forEach(elem => {

            
            //POST STRUCTURE:: container> contentDescr > author block > author img 
            //                            contentVideo                 author descr > author name
            //                                                          author info > a lot of small stuff
            //                                          caption block > title
            //                                                          text
            //                                                          link
            // 
                        
                                        

            //top level
            let container = document.createElement('div')   
            container.className = 'blog__content' 

            let contentVideo = document.createElement('div')
            contentVideo.className = `blog__content--video ${elem.bg} col-xl-6 `

            let contentDescr = document.createElement('div')
            contentDescr.className = `blog__content--caption ${elem.cornerImg} col-xl-6 `
            //content of the post
            let authorBlock = document.createElement('div')
            authorBlock.className = 'author col-10'
                //author data
                let authorImg = document.createElement('img')
                authorImg.className ='author__img'

                let authorDescr = document.createElement('div')
                authorDescr.className ='author__descr'

                    let  authorName = document.createElement('h5')
                    authorName.className ='author__descr--name'
                    let authorPostInfo = document.createElement('div')//div to fill
                    authorPostInfo.className ='author__descr--info'

                    let starsOfPost = document.createElement('div')
                    starsOfPost.className ='stars'

            let captionBlock = document.createElement('div')
            captionBlock.className ='caption col-10'


            //creating DOM structure
            if (typeof elem.bg != 'undefined') {   
                container.appendChild(contentVideo)
                
            }
            else {
                
                contentDescr.className = `blog__content--caption ${elem.cornerImg} col-xl-12 `
            }
            
            container.appendChild(contentDescr)

            contentDescr.append(authorBlock, captionBlock)

            authorBlock.append(authorImg,authorDescr)

            authorDescr.append(authorName, authorPostInfo)

            

            

            //filling fields with data

            authorImg.src = elem.img
            authorName.innerHTML = elem.name
            
            //filling a lot of small stuff in description bellow authors name
            let authorInfo = `  
            <span>${elem.date}</span>
            <div class="dot"></div>
            <span>${elem.time}</span>
            <div class="dot"></div>
            <img class= "comment" src="img/a-icon-comment.svg" alt="img">
            <span>${elem.commments}</span>
                <div class="stars">
                        <img src="${elem.stars[1]}" alt="img">
                        <img src="${elem.stars[2]}" alt="img">
                        <img src="${elem.stars[3]}" alt="img">
                        <img src="${elem.stars[4]}" alt="img">
                        <img src="${elem.stars[5]}" alt="img">
                </div>`

            authorPostInfo.innerHTML = authorInfo
            //filling text stuff and capture of post


            
            let textOfPost = `
                <h4 class="caption__title">${elem.caption}</h4>
                <p class="caption__descr">${elem.text}</p>
                <a class= "LinkToPost" href="post.html">Read more</a>
            `
            captionBlock.innerHTML = textOfPost

            console.log(container)
           
            
            root.before(container)
           
        });
        
                
            
        
    }
}
posts.renderPosts()
