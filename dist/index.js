"use strict";var __=wp.i18n.__,createBlock=wp.blocks.createBlock,PluginMoreMenuItem=wp.editPost.PluginMoreMenuItem,_wp$data=wp.data,select=_wp$data.select,dispatch=_wp$data.dispatch,registerPlugin=wp.plugins.registerPlugin,ResolveBlocks=function(){return React.createElement(PluginMoreMenuItem,{icon:"forms",onClick:function(){select("core/block-editor").getBlocks().map((function(e){if(!e.isValid){var t=createBlock(e.name,e.attributes,e.innerblocks);dispatch("core/block-editor").replaceBlock(e.clientId,t)}}))}},__("Attempt All Blocks Recovery","gutenberg-blocks-recovery"))};registerPlugin("gutenberg-blocks-recovery",{render:ResolveBlocks});