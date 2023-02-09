
export const fonts = () => {
    return app.gulp.src(app.path.src.fonts, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        })
    ))
    // Выгружаем в исходную папку
    .pipe(app.gulp.dest(app.path.build.fonts));
}

