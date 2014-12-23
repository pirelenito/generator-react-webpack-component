'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    this.appname = this.arguments[0] || this.appname;

    console.log(this.appname);

    this.slug = this._.slugify(this.appname);
    this.libname = this._.capitalize(this._.camelize(this._.slugify(this._.humanize(this.appname))));
  },

  configuring: function () {
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('jshintrc'),
      this.destinationPath('.jshintrc')
    );
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
      this.fs.copyTpl(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
      this.fs.copy(
        this.templatePath('karma.conf.js'),
        this.destinationPath('karma.conf.js')
      );
      this.fs.copyTpl(
        this.templatePath('_index.html'),
        this.destinationPath('index.html'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
    },

    lib: function () {
      this.fs.copyTpl(
        this.templatePath('lib/_index.js'),
        this.destinationPath('lib/index.js'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
      this.fs.copyTpl(
        this.templatePath('lib/_main-component.jsx'),
        this.destinationPath('lib/' + this.slug + '.jsx'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
      this.fs.copyTpl(
        this.templatePath('lib/_main-component.scss'),
        this.destinationPath('lib/' + this.slug + '.scss'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
    },

    spec: function () {
      this.fs.copyTpl(
        this.templatePath('spec/_main-component.spec.jsx'),
        this.destinationPath('spec/' + this.slug + '.spec.jsx'),
        { appname: this.appname, slug: this.slug, libname: this.libname }
      );
      this.fs.copy(
        this.templatePath('spec/spec-helper.js'),
        this.destinationPath('spec/spec-helper.js')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
