class AddReferencesToModels < ActiveRecord::Migration[5.1]
  def change
    add_reference :loan_adjustments, :loan
    add_reference :construction_draws, :loan
  end
end
