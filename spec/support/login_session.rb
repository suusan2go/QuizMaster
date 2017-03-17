shared_context 'login as current_user', login_as: :current_user do
  before { allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(current_user) }
end
