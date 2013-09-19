require 'redmine'

require_dependency 'ewwiki_hook'

Redmine::Plugin.register :redmine_toolbar_mods do
  name "Toolbar modifications"
  author 'Tavish Armstrong & Noah O Neal'
  description 'Added colour buttons to toolbar'
  version '0.0.2'
end
