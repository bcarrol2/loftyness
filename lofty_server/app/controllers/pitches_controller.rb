class PitchesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @pitches = Pitch.all
        pitches_data = {
            pitch1: pitch_count(1),
            pitch2: pitch_count(2),
            pitch3: pitch_count(3),
            pitch4: pitch_count(4),
            pitch5: pitch_count(5)
        }
        render json: pitches_data
    end

    def pitch_count(num)
        @pitches.where(value: num).size
    end

    def create
        pitch = Pitch.create!(pitch_params)
        if pitch
            render json: pitch
        else
            render json: pitch.errors
        end
    end

    private

    def pitch_params
        params.require(:pitch).permit(:label, :value)
    end
end
