class PitchesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @pitches = Pitch.all
        first_pitch = @pitches.where(value: 1).count
        second_pitch = @pitches.where(value: 2).count
        third_pitch = @pitches.where(value: 3).count
        fourth_pitch = @pitches.where(value: 4).count
        fifth_pitch = @pitches.where(value: 5).count
        pitches_data = {
            pitch1: first_pitch,
            pitch2: second_pitch,
            pitch3: third_pitch,
            pitch4: fourth_pitch,
            pitch5: fifth_pitch,
        }
        render json: pitches_data
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
        params.require(:pitch).permit(:name, :value)
    end
end
