Vagrant::Config.run do |config|
  config.vm.box       = 'precise32'
  config.vm.box_url   = 'http://files.vagrantup.com/precise32.box'
  config.vm.host_name = 'wisevoter'

  config.vm.forward_port 3000, 3000
  #Following port is to run local mongo
  #config.vm.forward_port 35729, 35729
  
  #FIX: Fix Vagrant clean build for shell provisioning.
  #Once installed the shell script should not run again
  #config.vm.provision :shell, :path => "builddev.sh"

end
