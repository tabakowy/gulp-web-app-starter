'use strict'

import gulp from 'gulp'
import { dirs } from './tasks/config'
import { images } from './tasks/images'
import { scripts } from './tasks/scripts'
import { serve } from './tasks/server'
import { styles } from './tasks/styles'
import { views } from './tasks/views'

export function watch() {
  gulp.watch(`${dirs.src}/scripts/**/*.js`, scripts)
  gulp.watch(`${dirs.src}/views/**/*.(html|php)`, views)
  gulp.watch(`${dirs.src}/styles/**/*.(scss|css)`, styles)
  gulp.watch(`${dirs.src}/images/**/*.{jpg,jpeg,png,gif,svg}`, images)
}

export const dev = gulp.series(
  images, gulp.parallel(scripts, styles, views, serve, watch)
)

export default dev
