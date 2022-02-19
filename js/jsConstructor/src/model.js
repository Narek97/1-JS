import images from './assets/image.png'
import {TitleBlock, ImageBlock, TextColumnsBlock, TextBlock} from './classes/blocks'

export const model = [

    new TitleBlock('Test title',{
        teg: 'h2',
        styles: 'background: darkred; color: #ffff;'
    },),

    new ImageBlock(images,{
        styles: 'padding 2rem 0',
        alt: 'my img',
        imageStyles: 'width: 400px;height:auto'
    }),

    new TextColumnsBlock([
        'text 1',
        'text 2',
        'text 3',
        'text 4',
    ], {
        styles: 'padding: 1rem;'
    }),

    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, enim!', {
        styles: 'background: darkblue; color: yellow;'
    },),


]
