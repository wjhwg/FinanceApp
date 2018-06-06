fis.set('namespace', 'financeapp');
fis.set('project.charset', 'utf-8');

// 记住以后所有的项目都要设置项目编码为 utf-8
// dev/test/production
// dev 开发环境
// test 测试环境
// production 生产环境、线上环境
fis.media('dev')
  .match('**/*.less', {
    parser: fis.plugin('less-2.x'),
    rExt: '.css'
  })
  .match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        useInlineMap: true
    })
})
  .match('/widget/**', {
    useSameNameRequire: true
  })
  .match('**.tmpl', {
    parser: fis.plugin('template', {
        sTag: '<#',
        eTag: '#>',
        global: 'template'
    }),
    isJsLike: true,
    release : false
});
