require 'rails_helper'

RSpec.describe "Root", type: :request do
  describe "GET /" do
    context 'not signin' do
      it "Show Toppage" do
        get root_path
        expect(response).to have_http_status(200)
      end
    end
    context 'signin' do
      it "Show Signin Toppage" do
        get root_path
        expect(response).to have_http_status(200)
      end
    end
  end
end
