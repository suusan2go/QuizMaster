Rails.application.config.assets.webpack_manifest =
  if File.exist?(Rails.root.join('public', 'assets', 'webpack-manifest.json'))
    JSON.parse(
      File.read(Rails.root.join('public', 'assets', 'webpack-manifest.json'))
    )
  end
