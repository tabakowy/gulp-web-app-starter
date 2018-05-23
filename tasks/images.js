'use strict'

import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import { dirs } from './config'

const imgPaths = {
  src: `${dirs.src}/images/**/*.{jpg,jpeg,png,gif,svg}`,
  dest: `${dirs.dest}/assets/img`
}

export function images() {
  return gulp.src(imgPaths.src)
    .pipe(newer(imgPaths.dest))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(imgPaths.dest))
}
