require 'test_helper'

class RecipesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @recipe = recipes(:one)
  end

  test "should get index" do
    get recipes_url, as: :json
    assert_response :success
  end

  test "should create recipe" do
    assert_difference('Recipe.count') do
      post recipes_url, params: { recipe: { category: @recipe.category, contains_dairy: @recipe.contains_dairy, contains_nuts: @recipe.contains_nuts, description: @recipe.description, gluten_free: @recipe.gluten_free, image: @recipe.image, name: @recipe.name, user_id: @recipe.user_id, vegan: @recipe.vegan } }, as: :json
    end

    assert_response 201
  end

  test "should show recipe" do
    get recipe_url(@recipe), as: :json
    assert_response :success
  end

  test "should update recipe" do
    patch recipe_url(@recipe), params: { recipe: { category: @recipe.category, contains_dairy: @recipe.contains_dairy, contains_nuts: @recipe.contains_nuts, description: @recipe.description, gluten_free: @recipe.gluten_free, image: @recipe.image, name: @recipe.name, user_id: @recipe.user_id, vegan: @recipe.vegan } }, as: :json
    assert_response 200
  end

  test "should destroy recipe" do
    assert_difference('Recipe.count', -1) do
      delete recipe_url(@recipe), as: :json
    end

    assert_response 204
  end
end
