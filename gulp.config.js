const project = "ewill-interview";
const version = "20220918";


const entry = 'src';
const output = 'dist';


module.exports = {
    project: project,
    port: 8083,
    css: `./${output}/public/css/style.css`,
    entry: `./${entry}`,
    output: `./${output}`,
    basedir: {
        sass: `./${entry}/sass/`,
        sassImg: `./${output}/public/images/sass_img/`,
        pug: `./${entry}/pug/`,
        img: `./${output}/public/images/`
    },
    entryPath: {
        sass: `./${entry}/sass/**/*.scss`,
        sassImg: `${entry}/sass_img/**/*.+(jpeg|jpg|png|gif|svg)`,
        pug: `./${entry}/pug/*.pug`,
        spritesImg: `./${entry}/img_sprite/*.png`,
        spritesSvg: `./${entry}/images/svg/*.svg`,
        js: `./${entry}/script/*.js`,
        img: `./${entry}/images/*`
    },
    outputPath: {
        sass: `./${output}/public/css/`,
        pug: `./dist/`,
        js: `./${output}/public/js/`,
        img: `./${output}/public/images/`
    },
    sassOpt: {
        outputStyle: 'compact',
        includePaths: ['node_modules/']
    },
    sassVar: {
        PROJECT_NAME: project,
        VERSION: version
    },
    pugOpt: {
        "debug": true,
        "pretty": true
    },
    njkOpt: {
        VERSION: version,
        IMG_PATH: "public/images",
        PROJECT_NAME: project
    },
    jsconfigOpt: {
        VERSION: version,
        PROJECT_NAME: project
    }

}