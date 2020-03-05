class CreatePitches < ActiveRecord::Migration[6.0]
  def change
    create_table :pitches do |t|
      t.string :name
      t.integer :value

      t.timestamps
    end
  end
end
