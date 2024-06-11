
if (typeof (window) !== 'undefined' && window.performance && window.performance.mark) {
  window.performance.mark('yotpo:loader:loaded');
}
var yotpoWidgetsContainer = yotpoWidgetsContainer || { guids: {} };
(function(){
    var guid = "e1CA5Ll6MNHZ1L1myl7cpGdHgTtQCQgnzIsI0G8Z";
    var loader = {
        loadDep: function (link, onLoad, strategy) {
            var script = document.createElement('script');
            script.onload = onLoad || function(){};
            script.src = link;
            if (strategy === 'defer') {
                script.defer = true;
            } else if (strategy === 'async') {
                script.async = true;
            }
            script.setAttribute("type", "text/javascript");
            script.setAttribute("charset", "utf-8");
            document.head.appendChild(script);
        },
        config: {
            data: {
                guid: guid
            },
            widgets: {
            
                "703201": {
                    instanceId: "703201",
                    instanceVersionId: "254710420",
                    templateAssetUrl: "https://staticw2.yotpo.com/widget-assets/widget-questions-and-answers/app.v0.7.0-6122.js",
                    cssOverrideAssetUrl: "",
                    customizationCssUrl: "",
                    customizations: {
                      "content-date-enable": true,
                      "content-date-format": "DD/MM/YY",
                      "content-pagination-per-page": 5,
                      "load-font-customizations": "view-primary-font, view-secondary-font",
                      "qna-embedded-mode-enabled": false,
                      "qna-empty-state-body-text": "Be the first to ask something about this product.",
                      "qna-empty-state-button-text": "Ask a question",
                      "qna-empty-state-enable": true,
                      "qna-empty-state-title-text": "Have a question?",
                      "qna-headline-enable": true,
                      "qna-headline-text": "Questions \u0026 Answers",
                      "qna-summary-enable": true,
                      "qna-summary-text": "{{answered_questions_count}} answered questions",
                      "reply-title": "Store Owner",
                      "shopper-avatar-enable": true,
                      "shopper-avatar-format": "icon",
                      "shopper-badge-enable": true,
                      "shopper-name-format": "firstNameWithInitial",
                      "view-background-color": "rgba(248,248,248,1)",
                      "view-line-separator-style": "smooth",
                      "view-primary-color": "rgba(0,0,0,1)",
                      "view-primary-font": "Open Sans@300|https://staticw2.yotpo.com/web-fonts/css/open_sans/v1/open_sans_300.css",
                      "view-secondary-font": "Open Sans@300|https://staticw2.yotpo.com/web-fonts/css/open_sans/v1/open_sans_300.css",
                      "view-text-color": "rgba(0,0,0,1)"
                    },
                    staticContent: {
                      "feature_filter_by_country": "disabled",
                      "feature_media_gallery_add_to_cart": "disabled",
                      "feature_media_gallery_upload_photos": "disabled",
                      "feature_media_gallery_upload_videos": "disabled",
                      "feature_reviews_bottom_line_syndication": "disabled",
                      "feature_reviews_css_editor": "enabled",
                      "feature_reviews_custom_questions": "enabled",
                      "feature_reviews_filter_by_media": "enabled",
                      "feature_reviews_filter_by_smart_topics": "enabled",
                      "feature_reviews_filter_by_star_rating": "enabled",
                      "feature_reviews_grouped_products": "enabled",
                      "feature_reviews_incentivized_badge": "enabled",
                      "feature_reviews_ocean": "disabled",
                      "feature_reviews_order_metadata": "disabled",
                      "feature_reviews_photos_and_videos": "enabled",
                      "feature_reviews_search": "enabled",
                      "feature_reviews_smart_sorting": "disabled",
                      "feature_reviews_sorting": "enabled",
                      "feature_reviews_star_distribution": "enabled",
                      "feature_reviews_summary": "enabled",
                      "feature_reviews_summary_filter": "enabled",
                      "feature_reviews_syndication": "enabled",
                      "feature_reviews_ugc_widgets_terms_and_conditions_settings_link_configuration": "",
                      "feature_reviews_ugc_widgets_terms_and_conditions_settings_link_text": "Terms \u0026 Conditions",
                      "feature_reviews_ugc_widgets_terms_and_conditions_settings_text": "I agree to the",
                      "feature_reviews_video_support_settings_ks": "djJ8NDk2Njk0Mny0YYvXlvt9TTjWuI7ql9_4k8w7y3Ps30Cf1Jl784YuKXbpWRzHGdZ0e4W21EyOLf2nIFHDY88aNHnnVNky-kU2",
                      "feature_reviews_video_support_settings_metadata_profile_id": "19634522",
                      "feature_reviews_video_support_settings_partner_id": "4966942",
                      "feature_reviews_white_label": "enabled",
                      "feature_reviews_widget_v3_settings_enabled_by_onboarding": "false",
                      "feature_terms_and_conditions": "enabled"
                    },
                    className: "QuestionsAndAnswers",
                    dependencyGroupId: null
                },
            
                "445357": {
                    instanceId: "445357",
                    instanceVersionId: "260385284",
                    templateAssetUrl: "https://staticw2.yotpo.com/widget-assets/widget-reviews-main-widget/app.v0.15.17-5296.js",
                    cssOverrideAssetUrl: "https://staticw2.yotpo.com/widget-assets/ReviewsMainWidget/e1CA5Ll6MNHZ1L1myl7cpGdHgTtQCQgnzIsI0G8Z/css-overrides/css-overrides.2023_10_27_14_22_08_538.css",
                    customizationCssUrl: "",
                    customizations: {
                      "bottom-line-custom-questions-enable": false,
                      "bottom-line-enable": true,
                      "bottom-line-show-text": true,
                      "bottom-line-text": "Based on {{reviews_count}} reviews",
                      "content-date-enable": true,
                      "content-date-format": "DD/MM/YY",
                      "content-pagination-per-page": 5,
                      "content-pagination-per-page-boldLayout": 9,
                      "default-sorting-order": "Most recent||With media||Verified purchase||Rating",
                      "empty-state-body-text": "Let us know what you think",
                      "empty-state-button-text": "Be the first to write a review!",
                      "empty-state-enable": true,
                      "empty-state-title-text": "We’re looking for stars!",
                      "example-background-color": "#3184ed",
                      "feature-reviews-filter-by-media-onsite-enable": "true",
                      "feature-reviews-filter-by-smart-topics-onsite-enable": "true",
                      "feature-reviews-filter-by-star-rating-onsite-enable": "true",
                      "feature-reviews-search-onsite-enable": "true",
                      "feature-reviews-smart-topics-minimum": 2,
                      "feature-reviews-sorting-onsite-enable": "false",
                      "feature-reviews-star-distribution-onsite-enable": "false",
                      "grouped-products-enable": false,
                      "incentivized-badge-details-enable": true,
                      "incentivized-badge-enable": true,
                      "incentivized-badge-title": "Incentivized review",
                      "incentivized-badge-type-text": "{{incentive_type}}",
                      "load-font-customizations": "view-primary-font, view-secondary-font",
                      "old-widget-class-name": "yotpo yotpo-main-widget",
                      "onsite-sorting": "",
                      "primary-font-name-and-url": "Montserrat@600|https://staticw2.yotpo.com/web-fonts/css/montserrat/v1/montserrat_600.css",
                      "primary-font-size": "14",
                      "read-only-enable": false,
                      "reply-title": "Store Owner",
                      "reviews-headline-enable": true,
                      "reviews-headline-text": "Customer Reviews",
                      "reviews-product-custom-questions-color": "#2e4f7c",
                      "reviews-product-custom-questions-enable": false,
                      "reviews-product-custom-questions-filters-enable": false,
                      "reviews-product-custom-questions-placement": "Right",
                      "reviews-reviewer-custom-questions-enable": false,
                      "reviews-reviewer-custom-questions-filters-enable": false,
                      "reviews-show-tab-title": false,
                      "reviews-summary-enable": false,
                      "screen-a-header-text": "Hello Live Widget!",
                      "shopper-avatar-enable": true,
                      "shopper-avatar-enable-boldLayout": false,
                      "shopper-avatar-format": "icon",
                      "shopper-badge-enable": true,
                      "shopper-name-format": "firstNameWithInitial",
                      "summary-button-style": 1,
                      "summary-button-text": "See reviews summary",
                      "summary-hide-logo-enable": false,
                      "summary-min-star-rating": 1,
                      "summary-show-button-icon": true,
                      "syndication-enable": false,
                      "view-background-color": "rgba(248,248,248,1)",
                      "view-empty-button-color": "#2e4f7c",
                      "view-layout": "standardLayout",
                      "view-line-separator-style": "smooth",
                      "view-primary-color": "rgba(0,0,0,1)",
                      "view-primary-font": "Open Sans@300|https://staticw2.yotpo.com/web-fonts/css/open_sans/v1/open_sans_300.css",
                      "view-secondary-font": "Open Sans@300|https://staticw2.yotpo.com/web-fonts/css/open_sans/v1/open_sans_300.css",
                      "view-stars-color": "rgba(4,4,4,1)",
                      "view-text-color": "rgba(0,0,0,1)",
                      "view-widget-width": "100",
                      "white-label-enable": "true"
                    },
                    staticContent: {
                      "feature_b_v_syndication": "enabled",
                      "feature_reviews_css_editor": "enabled",
                      "feature_reviews_custom_questions": "enabled",
                      "feature_reviews_filter_by_media": "enabled",
                      "feature_reviews_filter_by_smart_topics": "enabled",
                      "feature_reviews_filter_by_star_rating": "enabled",
                      "feature_reviews_grouped_products": "enabled",
                      "feature_reviews_incentivized_badge": "enabled",
                      "feature_reviews_photos_and_videos": "enabled",
                      "feature_reviews_search": "enabled",
                      "feature_reviews_sorting": "enabled",
                      "feature_reviews_star_distribution": "enabled",
                      "feature_reviews_summary": "enabled",
                      "feature_reviews_summary_filter": "enabled",
                      "feature_reviews_syndication": "enabled",
                      "feature_reviews_video_support_settings_ks": "djJ8NDk2Njk0MnyCpP1OFnxtlitfmPXFfbUc3xAcvAQujRPcwHGwE3AkrnD0GFriNks0rGz_hjMYdPXTA9tekUkKsamuOyO4ghMQ",
                      "feature_reviews_video_support_settings_metadata_profile_id": "19634522",
                      "feature_reviews_video_support_settings_partner_id": "4966942",
                      "feature_reviews_white_label": "enabled",
                      "feature_reviews_widget_v3_settings_enabled_by_onboarding": "false",
                      "feature_rich_snippet": "enabled",
                      "feature_terms_and_conditions": "enabled"
                    },
                    className: "ReviewsMainWidget",
                    dependencyGroupId: null
                },
            
                "445355": {
                    instanceId: "445355",
                    instanceVersionId: "258122422",
                    templateAssetUrl: "https://staticw2.yotpo.com/widget-assets/widget-reviews-star-ratings/app.v0.10.1-6275.js",
                    cssOverrideAssetUrl: "",
                    customizationCssUrl: "",
                    customizations: {
                      "add-review-enable": false,
                      "bottom-line-enable-category": "true",
                      "bottom-line-enable-product": true,
                      "bottom-line-show-text": true,
                      "bottom-line-text-category": "({{reviews_count}})",
                      "bottom-line-text-product": "({{reviews_count}} Reviews)",
                      "empty-state-enable": true,
                      "load-font-customizations": "view-primary-font",
                      "mutation-section-attribute": "collection",
                      "primary-font-name-and-url": "Montserrat@600|https://staticw2.yotpo.com/web-fonts/css/montserrat/v1/montserrat_600.css",
                      "primary-font-size": "14",
                      "rating-score-enable-category": "false",
                      "rating-score-enable-product": false,
                      "screen-a-header-text": "Hello Live Widget!",
                      "scroll-main-widget-enable": true,
                      "should-watch-mutations": true,
                      "star-rating-reviews-summary-toggle-enable": "false",
                      "summary-link-text": "See reviews summary",
                      "summary-show-link-icon": true,
                      "view-alignment-category": "center",
                      "view-alignment-product": "center",
                      "view-preview-catalog-page-html-container": "\u003cdiv class=\"yotpo-demo-store\"\u003e\n    \u003cdiv class=\"yotpo-demo-address-wrapper\"\u003e\n        \u003cdiv class=\"yotpo-demo-top-bar\"\u003e\n            \u003cdiv class=\"yotpo-demo-address-icons\"\u003e\n                \u003csvg class=\"yotpo-demo-address-icon\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                \u003e\n                    \u003ccircle cx=\"3.5\" cy=\"3.5\" r=\"3.5\" fill=\"#A4A4A4\"/\u003e\n                \u003c/svg\u003e\n                \u003csvg class=\"yotpo-demo-address-icon\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                \u003e\n                    \u003ccircle cx=\"3.5\" cy=\"3.5\" r=\"3.5\" fill=\"#A4A4A4\"/\u003e\n                \u003c/svg\u003e\n                \u003csvg class=\"yotpo-demo-address-icon\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                \u003e\n                    \u003ccircle cx=\"3.5\" cy=\"3.5\" r=\"3.5\" fill=\"#A4A4A4\"/\u003e\n                \u003c/svg\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-address-container\"\u003e\n                storename.com\n            \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"yotpo-demo-store-logo\"\u003e\n            \u003cdiv class=\"yotpo-demo-store-text\"\u003e\n                STORE LOGO\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-product-shopping-bag\"\u003e\n                \u003csvg width=\"16\" height=\"18\" viewBox=\"0 0 16 18\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                \u003e\n                    \u003cpath\n                            d=\"M3.36842 6V4.28571C3.36842 3.14907 3.81203 2.05898 4.60166 1.25526C5.39128 0.451529 6.46225 0 7.57895 0C8.69565 0 9.76661 0.451529 10.5562 1.25526C11.3459 2.05898 11.7895 3.14907 11.7895 4.28571V6H14.3158C14.5391 6 14.7533 6.09031 14.9112 6.25105C15.0692 6.4118 15.1579 6.62981 15.1579 6.85714V17.1429C15.1579 17.3702 15.0692 17.5882 14.9112 17.7489C14.7533 17.9097 14.5391 18 14.3158 18H0.842105C0.618765 18 0.404572 17.9097 0.246647 17.7489C0.0887215 17.5882 0 17.3702 0 17.1429V6.85714C0 6.62981 0.0887215 6.4118 0.246647 6.25105C0.404572 6.09031 0.618765 6 0.842105 6H3.36842ZM3.36842 7.71429H1.68421V16.2857H13.4737V7.71429H11.7895V9.42857H10.1053V7.71429H5.05263V9.42857H3.36842V7.71429ZM5.05263 6H10.1053V4.28571C10.1053 3.60373 9.8391 2.94968 9.36532 2.46744C8.89155 1.9852 8.24897 1.71429 7.57895 1.71429C6.90893 1.71429 6.26635 1.9852 5.79257 2.46744C5.3188 2.94968 5.05263 3.60373 5.05263 4.28571V6Z\"\n                            fill=\"white\"\n                    /\u003e\n                \u003c/svg\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cdiv class=\"yotpo-demo-product-page\"\u003e\n        \u003cdiv class=\"yotpo-product-catalog-wrapper\"\u003e\n                    \u003cdiv class=\"yotpo-demo-product-image\"\u003e\n            \u003cimg class=\"yotpo-demo-product-image-desktop\"\n                 src=\"https://cdn-widgetsrepository.yotpo.com/widget-assets/ReviewsStarRatingsWidget/assets/sr_glasses_1.webp\"/\u003e\n   \u003cdiv class=\"yotpo-demo-product-image-mobile\"\u003e\n       \u003c/div\u003e\n      \u003cimg class=\"yotpo-demo-product-image-mobile\"\n                 src=\"https://cdn-widgetsrepository.yotpo.com/widget-assets/ReviewsStarRatingsWidget/assets/sr_glasses_1.webp\"/\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"yotpo-demo-product-data\"\u003e\n            \u003cdiv class=\"yotpo-demo-product-title\"\u003e\n                \u003cdiv class=\"yotpo-demo-product-name\"\u003eProduct name\u003c/div\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-star-rating widget-placeholder-container\"\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-add-to-cart\"\u003e Add to cart\u003c/div\u003e\n        \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"yotpo-product-catalog-wrapper\"\u003e\n                    \u003cdiv class=\"yotpo-demo-product-image\"\u003e\n            \u003cimg class=\"yotpo-demo-product-image-desktop\"\n                 src=\"https://cdn-widgetsrepository.yotpo.com/widget-assets/ReviewsStarRatingsWidget/assets/sr_glasses_2.webp\"/\u003e\n   \u003cdiv class=\"yotpo-demo-product-image-mobile\"\u003e\n       \u003c/div\u003e\n      \u003cimg class=\"yotpo-demo-product-image-mobile\"\n                 src=\"https://cdn-widgetsrepository.yotpo.com/widget-assets/ReviewsStarRatingsWidget/assets/sr_glasses_2.webp\"/\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"yotpo-demo-product-data\"\u003e\n            \u003cdiv class=\"yotpo-demo-product-title\"\u003e\n                \u003cdiv class=\"yotpo-demo-product-name\"\u003eProduct name\u003c/div\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-star-rating widget-placeholder-container\"\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-add-to-cart\"\u003e Add to cart\u003c/div\u003e\n        \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"yotpo-product-catalog-wrapper\"\u003e\n                    \u003cdiv class=\"yotpo-demo-product-image\"\u003e\n            \u003cimg class=\"yotpo-demo-product-image-desktop\"\n                 src=\"https://cdn-widgetsrepository.yotpo.com/widget-assets/ReviewsStarRatingsWidget/assets/sr_glasses_3.webp\"/\u003e\n   \u003cdiv class=\"yotpo-demo-product-image-mobile\"\u003e\n       \u003c/div\u003e\n      \u003cimg class=\"yotpo-demo-product-image-mobile\"\n                 src=\"https://cdn-widgetsrepository.yotpo.com/widget-assets/ReviewsStarRatingsWidget/assets/sr_glasses_3.webp\"/\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"yotpo-demo-product-data\"\u003e\n            \u003cdiv class=\"yotpo-demo-product-title\"\u003e\n                \u003cdiv class=\"yotpo-demo-product-name\"\u003eProduct name\u003c/div\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-star-rating widget-placeholder-container\"\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-add-to-cart\"\u003e Add to cart\u003c/div\u003e\n        \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n\u003c/div\u003e",
                      "view-preview-catalog-page-style": ".yotpo-demo-store {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Nunito Sans';\n    min-height: 550px;\n    max-width: 1250px;\n}\n\n.yotpo-demo-address-wrapper {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    background-color: #f4f4f4;\n}\n\n.yotpo-demo-top-bar {\n    display: flex;\n    height: 28px;\n}\n\n.yotpo-demo-address-icons {\n    align-self: center;\n    white-space: nowrap;\n    margin-left:8px;\n    margin-right:8px;\n}\n\n.yotpo-demo-address-icon {\n    cursor: pointer;\n}\n\n.yotpo-demo-address-container {\n    color:#848484;\n    align-self: center;\n    background-color: #FFFFFF;\n    width: 95%;\n    height: 65%;\n    border-radius: 5px;\n    margin: 6px;\n    padding-left: 5px;\n    text-align: start;\n    font-size: 10px;\n    line-height: 20px;\n}\n\n.yotpo-demo-store-logo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #D6D6D6;\n    color: #FFFFFF;\n    width: 100%;\n    height: 50px;\n}\n\n.yotpo-demo-store-text {\n    line-height: 23px;\n    margin-left: 19px;\n}\n\n.yotpo-demo-product-shopping-bag {\n    display: flex;\n    margin-right: 16px;\n    cursor: pointer;\n}\n\n.yotpo-demo-product-page {\n    display: flex;\n    flex-direction: row;\n    align-self: center;\n    margin-top: 30px;\n}\n\n.yotpo-demo-product-image {\n    opacity: 0.5;\n}\n\n.yotpo-product-catalog-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: baseline;\n    width: 346px;\n}\n\n.yotpo-demo-product-image-desktop{\n    width:290px;\n    height:300px;\n}\n\n.yotpo-demo-product-image-mobile {\n    display: none;\n    min-height:135px\n}\n\n.yotpo-demo-product-data {\n    display: flex;\n    flex-direction: column;\n    margin-left: 26px;\n    margin-top: 20px;\n width: 83%;\n}\n\n .is-mobile .yotpo-demo-product-data.mobile {\n    display: none;\n}\n\n.yotpo-demo-product-title {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 14px;\n    opacity: 0.5;\n    text-align: start;\n    \n}\n\n.yotpo-demo-product-name {\n    font-weight: 700;\n    font-size: 25px;\n    line-height: 22px;\n    color: #2C2C2C;\n    text-align: start;\n    opacity: 0.5;\n    font-family: 'Nunito Sans';\n}\n\n\n.yotpo-demo-star-rating {\n    margin-bottom: 15px;\n}\n\n.yotpo-add-to-cart {\n    width: 75px;\n    height: 20px;\n    border: 1px solid #B4B4B4;\n    font-family: 'Nunito Sans';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 11px;\n    line-height: 125.9%;\n    text-align: center;\n    color: #B4B4B4;\n    padding: 8px;\n    flex-basis: max-content;\n}\n\n.is-mobile .yotpo-demo-store {\n    width: 353px;\n    height: 600px;\n}\n\n.is-mobile .yotpo-demo-address-icons {\n    width: 9%;\n}\n\n.is-mobile .yotpo-demo-product-shopping-bag {\n    margin-right: 16px;\n}\n\n.is-mobile .yotpo-product-catalog-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 346px;\n}\n\n.is-mobile .yotpo-demo-product-page {\n    flex-direction: column;\n    align-items: center;\n}\n\n.is-mobile .yotpo-demo-product-image {\n    margin-bottom: 23px;\n}\n\n.is-mobile .yotpo-demo-product-image-desktop {\n    display: none;\n}\n\n.is-mobile .yotpo-demo-product-image-mobile {\n    width: 250px;\n    display: unset;\n}\n\n.is-mobile .yotpo-demo-product-data {\n    width: 80%;\n    margin-left:0px\n}\n\n.is-mobile .yotpo-demo-product-title {\n    justify-content: space-between;\n}\n\n.is-mobile .yotpo-demo-star-rating {\n    align-self: start;\n}\n\n.is-mobile .yotpo-demo-product-info {\n    width: 85%;\n}\n\n.is-mobile .yotpo-demo-add-to-bag-btn {\n    width: 188px;\n    opacity: 0.5;\n}",
                      "view-preview-html-container": "\u003cdiv class=\"yotpo-demo-store\"\u003e\n    \u003cdiv class=\"yotpo-demo-address-wrapper\"\u003e\n        \u003cdiv class=\"yotpo-demo-top-bar\"\u003e\n            \u003cdiv class=\"yotpo-demo-address-icons\"\u003e\n                \u003csvg class=\"yotpo-demo-address-icon\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                \u003e\n                    \u003ccircle cx=\"3.5\" cy=\"3.5\" r=\"3.5\" fill=\"#A4A4A4\"/\u003e\n                \u003c/svg\u003e\n                \u003csvg class=\"yotpo-demo-address-icon\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                \u003e\n                    \u003ccircle cx=\"3.5\" cy=\"3.5\" r=\"3.5\" fill=\"#A4A4A4\"/\u003e\n                \u003c/svg\u003e\n                \u003csvg class=\"yotpo-demo-address-icon\" width=\"7\" height=\"7\" viewBox=\"0 0 7 7\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                \u003e\n                    \u003ccircle cx=\"3.5\" cy=\"3.5\" r=\"3.5\" fill=\"#A4A4A4\"/\u003e\n                \u003c/svg\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-address-container\"\u003e\n                storename.com\n            \u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"yotpo-demo-store-logo\"\u003e\n            \u003cdiv class=\"yotpo-demo-store-text\"\u003e\n                STORE LOGO\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-product-shopping-bag\"\u003e\n                \u003csvg width=\"16\" height=\"18\" viewBox=\"0 0 16 18\" fill=\"none\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                \u003e\n                    \u003cpath\n                            d=\"M3.36842 6V4.28571C3.36842 3.14907 3.81203 2.05898 4.60166 1.25526C5.39128 0.451529 6.46225 0 7.57895 0C8.69565 0 9.76661 0.451529 10.5562 1.25526C11.3459 2.05898 11.7895 3.14907 11.7895 4.28571V6H14.3158C14.5391 6 14.7533 6.09031 14.9112 6.25105C15.0692 6.4118 15.1579 6.62981 15.1579 6.85714V17.1429C15.1579 17.3702 15.0692 17.5882 14.9112 17.7489C14.7533 17.9097 14.5391 18 14.3158 18H0.842105C0.618765 18 0.404572 17.9097 0.246647 17.7489C0.0887215 17.5882 0 17.3702 0 17.1429V6.85714C0 6.62981 0.0887215 6.4118 0.246647 6.25105C0.404572 6.09031 0.618765 6 0.842105 6H3.36842ZM3.36842 7.71429H1.68421V16.2857H13.4737V7.71429H11.7895V9.42857H10.1053V7.71429H5.05263V9.42857H3.36842V7.71429ZM5.05263 6H10.1053V4.28571C10.1053 3.60373 9.8391 2.94968 9.36532 2.46744C8.89155 1.9852 8.24897 1.71429 7.57895 1.71429C6.90893 1.71429 6.26635 1.9852 5.79257 2.46744C5.3188 2.94968 5.05263 3.60373 5.05263 4.28571V6Z\"\n                            fill=\"white\"\n                    /\u003e\n                \u003c/svg\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n    \u003cdiv class=\"yotpo-demo-product-page\"\u003e\n        \u003cdiv class=\"yotpo-demo-product-image\"\u003e\n            \u003cimg class=\"yotpo-demo-product-image-desktop\"\n                 src=\"https://cdn-widgetsrepository.yotpo.com/widget-assets/ReviewsStarRatingsWidget/assets/glasses-image-desktop.webp\"/\u003e\n   \u003cdiv class=\"yotpo-demo-product-image-mobile\"\u003e\n       \u003c/div\u003e\n      \u003cimg class=\"yotpo-demo-product-image-mobile\"\n                 src=\"https://cdn-widgetsrepository.yotpo.com/widget-assets/ReviewsStarRatingsWidget/assets/glasses-image-mobile.webp\"/\u003e\n        \u003c/div\u003e\n        \u003cdiv class=\"yotpo-demo-product-data\"\u003e\n            \u003cdiv class=\"yotpo-demo-product-title\"\u003e\n                \u003cdiv class=\"yotpo-demo-product-name\"\u003eProduct name\u003c/div\u003e\n                \u003cdiv class=\"yotpo-demo-product-price\"\u003e$20\u003c/div\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-star-rating widget-placeholder-container\"\u003e\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-product-info\"\u003e\n                This is a short product description paragraph. It gives a bit more information\nabout the product’s features and benefits.\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-product-more-info\"\u003e\n                more text\n            \u003c/div\u003e\n            \u003cdiv class=\"yotpo-demo-product-buttons\"\u003e\n                \u003cdiv class=\"yotpo-demo-quantity-btn\"\u003e\n                    \u003cdiv\u003e-\u003c/div\u003e\n                    \u003cdiv\u003e1\u003c/div\u003e\n                    \u003cdiv\u003e+\u003c/div\u003e\n                \u003c/div\u003e\n                \u003cdiv class=\"yotpo-demo-add-to-bag-btn\"\u003e\n                    ADD TO BAG\n                \u003c/div\u003e\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n\u003c/div\u003e",
                      "view-preview-style": ".yotpo-demo-store {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Nunito Sans';\n    min-height: 550px;\n    max-width: 1250px;\n}\n\n.yotpo-demo-address-wrapper {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    background-color: #f4f4f4;\n}\n\n.yotpo-demo-top-bar {\n    display: flex;\n    height: 28px;\n}\n\n.yotpo-demo-address-icons {\n    align-self: center;\n    white-space: nowrap;\n    margin-left:8px;\n    margin-right:8px;\n}\n\n.yotpo-demo-address-icon {\n    cursor: pointer;\n}\n\n.yotpo-demo-address-container {\n    color:#848484;\n    align-self: center;\n    background-color: #FFFFFF;\n    width: 95%;\n    height: 65%;\n    border-radius: 5px;\n    margin: 6px;\n    padding-left: 5px;\n    text-align: start;\n    font-size: 10px;\n    line-height: 20px;\n}\n\n.yotpo-demo-store-logo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #D6D6D6;\n    color: #FFFFFF;\n    width: 100%;\n    height: 50px;\n}\n\n.yotpo-demo-store-text {\n    line-height: 23px;\n    margin-left: 19px;\n}\n\n.yotpo-demo-product-shopping-bag {\n    display: flex;\n    margin-right: 16px;\n    cursor: pointer;\n}\n\n.yotpo-demo-product-page {\n    display: flex;\n    flex-direction: row;\n    align-self: center;\n    margin-top: 45px;\n}\n\n.yotpo-demo-product-image {\n    opacity: 0.5;\n    margin-right: 14px;\n    min-width: 200px;\n}\n\n.yotpo-demo-product-image-desktop{\n    width:234px;\n    height:297px;\n}\n\n.yotpo-demo-product-image-mobile {\n    display: none;\n    min-height:135px\n}\n\n.yotpo-demo-product-data {\n    display: flex;\n    flex-direction: column;\n    width: 330px;\n    margin-left: 26px;\n}\n\n.yotpo-demo-product-title {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 23px;\n    opacity: 0.5;\n}\n\n.yotpo-demo-product-name {\n    font-weight: 700;\n    font-size: 25px;\n    line-height: 22px;\n    color: #2C2C2C;\n    text-align: start;\n    opacity: 0.5;\n}\n\n.yotpo-demo-product-price {\n    font-weight: 400;\n    font-size: 22px;\n    line-height: 22px;\n    color: #2C2C2C;\n    text-align: end;\n    opacity: 0.5;\n}\n\n.yotpo-demo-star-rating {\n    margin-bottom: 23px;\n}\n\n.yotpo-demo-product-info {\n    width: 75%;\n    text-align: start;\n    margin-bottom: 16px;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 17px;\n    color: #2C2C2C;\n    opacity: 0.5;\n}\n\n.yotpo-demo-product-more-info {\n    cursor: pointer;\n    text-align: start;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 16px;\n    text-decoration-line: underline;\n    color: #2C2C2C;\n    margin-bottom: 75px;\n    opacity: 0.5;\n}\n\n.yotpo-demo-product-buttons {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    opacity: 0.5;\n}\n\n.yotpo-demo-quantity-btn {\n    display: flex;\n    flex-direction: row;\n    width: 75px;\n    height: 33px;\n    border: 1px solid #2C2C2C;\n    box-sizing: border-box;\n    align-items: center;\n    justify-content: space-between;\n    padding: 7px 10px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 20px;\n    color: #2C2C2C;\n    cursor: pointer;\n    margin-right: 16px;\n}\n\n.yotpo-demo-add-to-bag-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 33px;\n    background-color: #2e4f7c;\n    color: #FFFFFF;\n    cursor: pointer;\n    width: 230px;\n    opacity: 0.5;\n}\n\n.is-mobile .yotpo-demo-store {\n    width: 353px;\n    height: 600px;\n}\n\n.is-mobile .yotpo-demo-address-icons {\n    width: 9%;\n}\n\n.is-mobile .yotpo-demo-product-shopping-bag {\n    margin-right: 16px;\n}\n\n.is-mobile .yotpo-demo-product-page {\n    flex-direction: column;\n    align-items: center;\n}\n\n.is-mobile .yotpo-demo-product-image {\n    margin-bottom: 23px;\n}\n\n.is-mobile .yotpo-demo-product-image-desktop {\n    display: none;\n}\n\n.is-mobile .yotpo-demo-product-image-mobile {\n    width: 370px;\n    display: unset;\n}\n\n.is-mobile .yotpo-demo-product-data {\n    width: 80%;\n    margin-left:0px\n}\n\n.is-mobile .yotpo-demo-product-title {\n    justify-content: space-between;\n}\n\n.is-mobile .yotpo-demo-star-rating {\n    align-self: start;\n}\n\n.is-mobile .yotpo-demo-product-info {\n    width: 85%;\n}\n\n.is-mobile .yotpo-demo-add-to-bag-btn {\n    width: 188px;\n    opacity: 0.5;\n}\n",
                      "view-primary-font": "Nunito Sans@700|https://staticw2.yotpo.com/web-fonts/css/nunito_sans/v1/nunito_sans_700.css",
                      "view-stars-color": "rgba(44,44,44,1)",
                      "view-text-color-category": "#2C2C2C",
                      "view-text-color-product": "#2C2C2C"
                    },
                    staticContent: {
                      "feature_reviews_css_editor": "enabled",
                      "feature_reviews_custom_questions": "enabled",
                      "feature_reviews_filter_by_media": "enabled",
                      "feature_reviews_filter_by_smart_topics": "enabled",
                      "feature_reviews_filter_by_star_rating": "enabled",
                      "feature_reviews_grouped_products": "enabled",
                      "feature_reviews_photos_and_videos": "enabled",
                      "feature_reviews_search": "enabled",
                      "feature_reviews_sorting": "enabled",
                      "feature_reviews_star_distribution": "enabled",
                      "feature_reviews_summary": "enabled",
                      "feature_reviews_summary_filter": "enabled",
                      "feature_reviews_syndication": "enabled",
                      "feature_reviews_video_support_settings_ks": "djJ8NDk2Njk0Mnwf-lDnw3Ipenr8byAdWOo2sAPXQwiUf7rQU91LH7eDePH3ctHbwrrLz_ErZI3naW1KOrv21D0qUdpWE5JE1cZS",
                      "feature_reviews_video_support_settings_metadata_profile_id": "19634522",
                      "feature_reviews_video_support_settings_partner_id": "4966942",
                      "feature_reviews_white_label": "enabled",
                      "feature_reviews_widget_v3_settings_enabled_by_onboarding": "false"
                    },
                    className: "ReviewsStarRatingsWidget",
                    dependencyGroupId: null
                },
            
            },
            guidStaticContent: {},
            dependencyGroups: {}
        },
        initializer: "https://staticw2.yotpo.com/widget-assets/widgets-initializer/app.v0.9.1-6336.js",
        analytics: "https://staticw2.yotpo.com/widget-assets/yotpo-pixel/2024-04-18_14-53-12/bundle.js"
    }
    
    
    const initWidgets = function (config, initializeWidgets = true) {
        const widgetInitializer = yotpoWidgetsContainer['yotpo_widget_initializer'](config);
        return widgetInitializer.initWidgets(initializeWidgets);
    };
    const initWidget = function (config, instanceId, widgetPlaceHolder) {
        const widgetInitializer = yotpoWidgetsContainer['yotpo_widget_initializer'](config);
        if (widgetInitializer.initWidget) {
            return widgetInitializer.initWidget(instanceId, widgetPlaceHolder);
        }
        console.error("initWidget is not supported widgetInitializer");
    };
    const onInitializerLoad = function (config) {
        const prevInitWidgets = yotpoWidgetsContainer.initWidgets;
        yotpoWidgetsContainer.initWidgets = function (initializeWidgets = true) {
            if (prevInitWidgets) {
                if (typeof Promise !== 'undefined' && Promise.all) {
                    return Promise.all([prevInitWidgets(initializeWidgets), initWidgets(config, initializeWidgets)]);
                }
                console.warn('[deprecated] promise is not supported in initWidgets');
                prevInitWidgets(initializeWidgets);
            }
            return initWidgets(config, initializeWidgets);
        }
        const prevInitWidget = yotpoWidgetsContainer.initWidget;
        yotpoWidgetsContainer.initWidget = function (instanceId, widgetPlaceHolder) {
            if (prevInitWidget) {
              prevInitWidget(instanceId, widgetPlaceHolder)
            }
            return initWidget(config, instanceId, widgetPlaceHolder);
        }
        const guidWidgetContainer = getGuidWidgetsContainer();
        guidWidgetContainer.initWidgets = function () {
            return initWidgets(config);
        }
        guidWidgetContainer.initWidgets();
    };
    function getGuidWidgetsContainer () {
        if (!yotpoWidgetsContainer.guids) {
            yotpoWidgetsContainer.guids = {};
        }
        if (!yotpoWidgetsContainer.guids[guid]) {
            yotpoWidgetsContainer.guids[guid] = {};
        }
        return yotpoWidgetsContainer.guids[guid];
    }
    function initWidgetsTestingGroupData(guid) {
        const testingGroupData = {};
        const storageUUIDData = sessionStorage.getItem(`${guid}_uuid`);
        const storageTestingData = yotpoWidgetsContainer.testingGroupData;
        if (!storageTestingData) {
            testingGroupData.analyticsId = yotpoWidgetsContainer.GetAnalyticsId();
            const encodedUUID = new TextEncoder().encode(testingGroupData.analyticsId);
            crypto.subtle.digest("SHA-1", encodedUUID).then(hashArrayBuffer => {
                testingGroupData.hash = new Uint8Array(hashArrayBuffer || []);
                yotpoWidgetsContainer.testingGroupData = testingGroupData;
            });
        }
        if (!storageUUIDData) {
            yotpoWidgetsContainer.guids["e1CA5Ll6MNHZ1L1myl7cpGdHgTtQCQgnzIsI0G8Z"].uuid = "f1a6cb1c-619f-4dbd-933d-7798daab3081";
        }
    }

    const guidWidgetContainer = getGuidWidgetsContainer();
    guidWidgetContainer.config = loader.config;
    if (!guidWidgetContainer.yotpo_widget_scripts_loaded) {
        guidWidgetContainer.yotpo_widget_scripts_loaded = true;
        guidWidgetContainer.onInitializerLoad = function () { onInitializerLoad(loader.config) };
        
        loader.loadDep(loader.analytics, function () {  initWidgetsTestingGroupData(guid); }, 'defer');
        
        
        loader.loadDep(loader.initializer, function () { guidWidgetContainer.onInitializerLoad() }, 'async');
        
    }
})()



yotpoWidgetsContainer.yotpoV3 = yotpoWidgetsContainer.yotpoV3 || {
    refreshWidgets: function () {
        if (typeof yotpoWidgetsContainer.initWidgets === 'function') {
            yotpoWidgetsContainer.initWidgets();
        }
        if (typeof yotpo !== 'undefined' && yotpo.v2YotpoLoaded) {
            yotpo.refreshWidgetsV2();
        }
    },
    initWidgets: function () {
        if (typeof yotpoWidgetsContainer.initWidgets === 'function') {
            yotpoWidgetsContainer.initWidgets(false);
        }
        if (typeof yotpo !== 'undefined' && yotpo.v2YotpoLoaded) {
            yotpo.initWidgetsV2();
        }
    },
    allowCookies: function () {
        yotpoWidgetsContainer.yotpoV3.v2Callbacks.push(() => yotpo.allowCookies());
    },
    performV3Logic: function () {
        if (!yotpoWidgetsContainer.yotpoV3.swap) {
            yotpo.refreshWidgetsV2 = yotpo.refreshWidgets;
            yotpo.refreshWidgets = yotpoWidgetsContainer.yotpoV3.refreshWidgets;
            yotpo.initWidgetsV2 = yotpo.initWidgets;
            yotpo.initWidgets = yotpoWidgetsContainer.yotpoV3.initWidgets;
            yotpoWidgetsContainer.yotpoV3.swap = true;
        }
    },
    v2Callbacks: [],
    v2YotpoLoaded: false,
    swap: false,
    analytics: true
};

var Yotpo = Yotpo || {};

Yotpo.API = Yotpo.API || (function () {
    function API(instance) {
        this.instance = instance;
    }

    API.prototype.refreshWidgets = function () {
        this.instance.refreshWidgets()
    }

    return API
})();


var yotpo = yotpo || yotpoWidgetsContainer.yotpoV3

if (yotpo.v2YotpoLoaded) {
    yotpoWidgetsContainer.yotpoV3.performV3Logic();
}


